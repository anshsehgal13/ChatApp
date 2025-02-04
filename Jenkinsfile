pipeline {
    agent { label "Agent-Ansh"}

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

        stage('Deploy') {
            agent { label "Agent-Ansh" }
            steps {
                sh 'python3 -m venv myenv'  // Create virtual environment
                sh 'source myenv/bin/activate && pip install -r requirements.txt'  // Install dependencies
                sh 'source myenv/bin/activate && streamlit run backend/app.py --server.port 8000'  // Run Streamlit on port 8000
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
