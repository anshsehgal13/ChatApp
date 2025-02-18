pipeline {
    agent any

    environment {
        GITHUB_REPO = "https://github.com/YOUR_USERNAME/YOUR_REPO.git"
        NODE_VERSION = "18.17.1"  
        RENDER_API_KEY = "rnd_qXmPDBgzdjGTrvsQRnZcqoz8Z22k"
        RENDER_SERVICE_ID = "cslr8clumphs73bhfr70"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: "https://github.com/anshsehgal13/ChatApp/"
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Run the install command using npm
                    sh 'npm install --prefix frontend'
                    sh 'npm install --prefix backend'
                }
            }
        }

        stage('Build App') {
            steps {
                script {
                    sh 'npm run build --prefix frontend'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'echo "Running tests (Dummy Stage)"'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'curl -X POST -H "Accept: application/json" -H "Authorization: Bearer ${RENDER_API_KEY}" https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}
