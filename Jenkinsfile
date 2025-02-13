pipeline {
    agent any

    environment {
        PATH = "/usr/bin/:${env.PATH}"
    }

    stages {
        stage('Check NodeJS Version') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install --prefix frontend'
                sh 'npm install --prefix backend'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build --prefix frontend'
            }
        }
    }
}
