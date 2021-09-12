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
		registry = "registry.bbofamily.com/"
    	registryCredential = 'registry.bbofamily.com'
		ponicode_square_image = 'ponicode-square:1.2'
		max_number_of_tasks = 10
	}
	agent any

	stages {

		stage('Cloning git') {
			agent {
				docker {
					image env.ponicode_square_image
					registryUrl "https://${env.registry}"
					registryCredentialsId env.registryCredential
					reuseNode true
				}
			}
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
		stage('Run Ponicode Square Quality Gate') {
			agent {
				docker {
					image env.ponicode_square_image
					registryUrl "https://${env.registry}"
					registryCredentialsId env.registryCredential
					reuseNode true
				}
			}
			steps{
				script {
					sh "cd /app/model/; poetry run python script_cli.py ${max_number_of_tasks} ${env.WORKSPACE}"
					//sh "docker run ${registry}${ponicode_square_image} /bin/sh -c 'cd /app/model/; ls -l ${env.WORKSPACE}; poetry run python script_cli.py ${max_number_of_tasks} ${env.WORKSPACE}'"
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
		
		stage('SonarQube analysis') {
			agent {
				docker {
					image env.ponicode_square_image
					registryUrl "https://${env.registry}"
					registryCredentialsId env.registryCredential
					reuseNode true
				}
			}
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
