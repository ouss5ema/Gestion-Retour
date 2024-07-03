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
          def scannerHome = tool 'sonarqube';
           withSonarQubeEnv('sonarqube'){
            sh "${scannerHome}/bin/sonar-scanner \
               -D sonar.projectKey=jenkins2
        }

        
    }
}
