// pipeline {
//     agent any

//     environment {
//         SCANNER_HOME = tool 'SonarQube Scanner' // Tool name from Global Tool Configuration
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 git 'https://github.com/ouss5ema/Gestion-Retour.git'
//             }
//         }

//         stage('SonarQube Analysis') {
//           def scannerHome = tool 'sonarqube';
//            withSonarQubeEnv('sonarqube'){
//             sh "${scannerHome}/bin/sonar-scanner \
//               -D sonar.login=admin   \
//                     -D sonar.password=oussema \
//                     -D sonar.projectKey=vprofile \
                    
//                     -D sonar.host.url=http://192.168.147.184:9000/"
//         }

        
//     }
// }
// pipeline {
//     agent any

//     environment {
//         SCANNER_HOME = tool name: 'SonarQubesc', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/ouss5ema/Gestion-Retour.git'
//             }
//         }

//         stage('SonarQube Analysis') {
//             steps {
//                 script {
//                     withSonarQubeEnv('SonarQube') {
//                         sh "${scannerHome}/bin/sonar-scanner \
//                             -Dsonar.login=admin \
//                             -Dsonar.password=oussema \
//                             -Dsonar.projectKey=vprofile \
//                             -Dsonar.host.url=http://192.168.147.184:9000/"
//                     }
//                 }
//             }
//         }
//     }
// }
pipeline {
    agent any

    environment {
        SCANNER_HOME = tool name: 'sq', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ouss5ema/Gestion-Retour.git'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('sq') {
                        sh """
                            ${SCANNER_HOME}/bin/sonar-scanner \
                            -Dsonar.login=admin \
                            -Dsonar.password=oussema \
                            -Dsonar.projectKey=vprofile \
                            -Dsonar.host.url=http://192.168.147.184:9000/
                        """
                    }
                }
            }
        }
    }
}

