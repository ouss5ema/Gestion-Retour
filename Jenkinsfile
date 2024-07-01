pipeline {
    agent any

    environment {
        SCANNER_HOME = tool 'SonarQube Scanner' // Tool name from Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/ouss5ema/Gestion-Retour.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') { // SonarQube server name from Configure System
                    sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=sqa_637abf16d94f71dee46a60bfc71875b9c06489f0 -Dsonar.sources=."
                }
            }
        }

        stage('Quality Gate') {
            steps {
                script {
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }
    }
}
