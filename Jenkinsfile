def getBuildUser() {
    return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}

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


pipeline {
	environment {
		SERVER_PORTAL_ADDRESS = '10.10.0.129'
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

			}
			post {
				always {
					script {
						FAILED_STAGE = env.STAGE_NAME
					}
				}
			}
		}
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
		
		stage('Implement deps') {
			parallel {
				stage('[express-apis-app] install deps') {
					steps {
						nodejs('Node 14.5.0') {
							sh '''
								cd express-apis-app
								npm install
							'''
						}
						send_slack_notif_step()
					}				
				}
				stage('[react-app] install deps') {
					steps {
						nodejs('Node 14.5.0') {
							sh '''
								cd react-app
								npm install
							'''
						}
						send_slack_notif_step()
					}					
				}
				
				
			}
			post {
				always {
					script {
						FAILED_STAGE = env.STAGE_NAME
					}
				}

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
			parallel {
				stage('[express-apis-app] run tests') {
					steps {
						catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
							nodejs('Node 14.5.0') {
								sh '''
									cd express-apis-app
									npm run test:cov
								'''
							}
							send_slack_notif_step()
						}
						
					}				
				}
				stage('[react-app] run tests') {
					steps {
						catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {

							nodejs('Node 14.5.0') {
								sh '''
									cd react-app
									npm run test-non-int:cov
								'''
							}
							send_slack_notif_step()
						}
					}					
				}
			}
			post {
				always {
					script {
						FAILED_STAGE = env.STAGE_NAME
					}
				}

			}
		}
		stage('SonarQube analysis') {
			environment {
				scannerHome = tool 'SonarQube Scanner 3.3.0.1492'
			}

			steps {
				nodejs('Node 14.5.0') {

					withSonarQubeEnv('Bbofamily SonarQube') {
						sh "${scannerHome}/bin/sonar-scanner"
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
