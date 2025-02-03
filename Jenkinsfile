pipeline {
    agent any

    environment {
        NODE_VERSION = '18.17.1'  // Set your Node.js version
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/anshsehgal13/ChatApp.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'cd backend && npm install'
                    sh 'cd frontend && npm install'
                }
            }
        }

        stage('Build Application') {
            steps {
                script {
                    sh 'cd frontend && npm run build'
                }
            }
        }

        stage('Test (Dummy Stage)') {
            steps {
                echo 'Running dummy tests...'
            }
        }

        stage('Deploy to Streamlit') {
            steps {
                script {
                    // Adjust this if deploying elsewhere
                    sh 'streamlit run backend/app.py'
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful! 🎉'
        }
        failure {
            echo 'Pipeline Failed! ❌'
        }
    }
}
