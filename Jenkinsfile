pipeline {
    agent any

    environment {
        NODE_PATH = "/usr/bin/node"
        NPM_PATH = "/usr/bin/npm"
    }

    stages {
        stage('Check Node & NPM Versions') {
            steps {
                script {
                    sh '${NODE_PATH} -v'
                    sh '${NPM_PATH} -v'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh '${NPM_PATH} install --prefix frontend'
                    sh '${NPM_PATH} install --prefix backend'
                }
            }
        }

        stage('Build App') {
            steps {
                script {
                    sh '${NPM_PATH} run build --prefix frontend'
                }
            }
        }
    }
}
