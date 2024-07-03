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
//           def scannerHome = tool 'sq';
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
// pipeline {
//     agent any

//     environment {
//         SCANNER_HOME = tool name: 'sq', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
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
//                     withSonarQubeEnv('sq') {
//                         sh """
//                             ${SCANNER_HOME}/bin/sonar-scanner \
//                             -Dsonar.login=admin \
//                             -Dsonar.password=oussema \
//                             -Dsonar.projectKey=vprofile \
//                             -Dsonar.host.url=http://192.168.147.184:9000/
//                         """
//                     }
//                 }
//             }
//         }
//     }
// }
pipeline {
    agent { label 'linux' }
    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
    }
    stages {
        stage('Scan') {
            steps {
                withSonarQubeEnv(installationName: 'sq1') {
                    sh './mvnw clean org.sonarsource.scanner.maven:sonar-maven-plugin:3.9.0.2155:sonar'
                }
            }
        }
    }
}

