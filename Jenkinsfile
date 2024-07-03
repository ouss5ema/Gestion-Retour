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
              -D sonar.login=admin   \
                    -D sonar.password=oussema \
                    -D sonar.projectKey=vprofile \
                    
                    -D sonar.host.url=http://192.168.147.184:9000/"
        }

        
    }
}
