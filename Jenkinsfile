def send_slack_notif_step() {
  slackSend channel: '#jenkins-notifs',
    color: 'warning',
    message: "*STEP ${env.STAGE_NAME}:* Job ${env.JOB_NAME} build ${env.GIT_COMMIT} \n More info at: ${env.BUILD_URL}"
}

def send_slack_notif_final(message) {
  COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']

  slackSend channel: '#jenkins-notifs',
    color: COLOR_MAP[currentBuild.currentResult],
    message: message
}

stageResultMap = [:]

pipeline {
	environment {
		registry = "ponicodesquarepublicregistry.azurecr.io/"
    	registryCredential = 'ponicodesquarepublicregistry'
		ponicode_square_image = 'ponicode-square:latest'
		max_number_of_tasks = 10
	}
	agent any

	stages {

		stage('Cloning git') {
			steps {

				bitbucketStatusNotify(buildState: 'INPROGRESS')

				slackSend channel: '#jenkins-notifs',
					color: 'good',
					message: "*STARTED:* Job ${env.JOB_NAME} \n More info at: ${env.BUILD_URL}"

				checkout scm

				sh "ls -l ${env.WORKSPACE}"

			}
			post {
				always {
					script {
						FAILED_STAGE = env.STAGE_NAME
					}
				}
			}
		}
		stage('Run Ponicode Square Quality Gate') {
			steps{
				script {
					try {                                        
						docker.withRegistry("https://" + env.registry, env.registryCredential) {
							dockerImageOptions = "-u root --network host"
							docker.image(env.registry + env.ponicode_square_image).inside(dockerImageOptions) {
								SQUARE_JSON_STR = sh (
									script: "export APP_ENV=local; export PORT=8002; cd /app/model; poetry run python -W ignore script_cli.py 10 ${env.WORKSPACE} |jq .",
									returnStdout: true
								).trim()
							}
						}
						SQUARE_JSON =  readJSON text: SQUARE_JSON_STR
						writeJSON(file: 'ponicode_square_report.json', json: SQUARE_JSON)
						GRADE = sh (
							script: "echo ${SQUARE_JSON.grade}",
							returnStdout: true
						).trim()
						echo GRADE
						if (GRADE == "A") {
							sh "exit 0"
							stageResultMap.squareGradeSucceed = true
						} else {
							unstable("${STAGE_NAME} failed!")
							currentBuild.result = 'FAILURE'
							stageResultMap.squareGradeSucceed = false
						}
						
					}
					catch (Exception e) {
						unstable("${STAGE_NAME} failed!")
						currentBuild.result = 'FAILURE'
						stageResultMap.squareGradeSucceed = false                                        
					}

				}
				send_slack_notif_step()
			}
			post {
				always {
					archiveArtifacts artifacts: 'ponicode_square_report.json', onlyIfSuccessful: false
				}
			}

		}
		stage('SQUARE is < A => Launch Ponicode UT pipeline!') {
            // Execute only if SQUARE fails
            when {
                expression {
                    return ! stageResultMap.find{ it.key == "squareGradeSucceed" }?.value
                }
            }

            stages {

                stage('install ponicode') {
                    steps('Install Ponicode CLI') {
                        nodejs('Node 14.5.0') {
                            sh '''
                                npm install -g ponicode
                            '''
                        }
                        send_slack_notif_step()
                    }
                }

                stage('Ponicode login') {
                    steps {
                        nodejs('Node 14.5.0') {
                            sh '''
                                if [ ! -d $HOME/.config ]; then mkdir $HOME/.config; elif [ ! -d $HOME/.config/ponicode ]; then mkdir $HOME/.config/ponicode; fi
                            '''
                        }
                        script {
                            def myJSON = readJSON text: '{}'
                            myJSON = "${env.PONICODE_LOGIN}" as String
                            echo myJSON
                            writeJSON file: "$HOME/.config/ponicode/settings.json", json: myJSON
                        }
                        
                        send_slack_notif_step()
                    }
                    
                }
                stage('install deps') {
                    
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'UNSTABLE') {
                            nodejs('Node 14.5.0') {
                                sh '''
                                    npm install
                                '''
                            }
                        }
                        send_slack_notif_step()
                    }				
                }
                stage('Ponicode generates UT') {
                    steps('generate UT') {
                        nodejs('Node 14.5.0') {
                            sh '''
                                PC_VERBOSE=telemetry ponicode test ./
                            '''
                        }
                        
                        send_slack_notif_step()
                    }
                }
                stage('Run tests') {
                    steps {
                        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                            nodejs('Node 14.5.0') {
                                sh '''
                                    npm run test
                                '''
                            }
                            send_slack_notif_step()
                        }
                        
                    }					
                }

            }

            
        }
		stage('SonarQube analysis') {
			environment {
				scannerHome = tool 'SonarQube Scanner 3.3.0.1492'
			}

			steps {
                catchError(buildResult: 'UNSTABLE', stageResult: 'UNSTABLE') {

                    nodejs('Node 14.5.0') {

                        withSonarQubeEnv('Bbofamily SonarQube') {
                            sh "${scannerHome}/bin/sonar-scanner"
                        }

                    }
                }

				send_slack_notif_step()
			}
			post {
				always {
					script {
						FAILED_STAGE = env.STAGE_NAME
					}
				}
			}
		}
	}
	post {
		always {
				deleteDir()
				echo 'I will always say Hello again!'
		}
    	success {
			bitbucketStatusNotify(buildState: 'SUCCESSFUL')
			send_slack_notif_final("*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.GIT_COMMIT} \n More info at: ${env.BUILD_URL}")
		}
		failure {
       		bitbucketStatusNotify(buildState: 'FAILED')
       		send_slack_notif_final("*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.GIT_COMMIT} failed at stage: _${FAILED_STAGE}_ \n More info at: ${env.BUILD_URL}")
		}
	}
}
