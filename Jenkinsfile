// pipeline {
//     agent any

//     environment {
//         NODE_PATH = "/usr/bin/node"
//         NPM_PATH = "/usr/bin/npm"
//     }

//     stages {
//         stage('Clone Repository') {
//             steps {
//                 script {
//                     sh 'rm -rf *'  // Clean workspace before cloning
//                     git branch: 'master', url: "https://github.com/anshsehgal13/ChatApp/"
//                     sh 'ls -R'  // Debug: List all files in workspace
//                 }
//             }
//         }

//         stage('Check Node & NPM Versions') {
//             steps {
//                 script {
//                     sh '${NODE_PATH} -v'
//                     sh '${NPM_PATH} -v'
//                 }
//             }
//         }

//         stage('Install Dependencies') {
//             steps {
//                 script {
//                     sh 'if [ -f package.json ]; then ${NPM_PATH} install; else echo "package.json missing"; exit 1; fi'
//                 }
//             }
//         }

//         stage('Build App') {
//             steps {
//                 script {
//                     sh '${NPM_PATH} run build'
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo '✅ Deployment Successful!'
//         }
//         failure {
//             echo '❌ Deployment Failed!'
//         }
//     }
// }




pipeline {
    agent any

    environment {
        NODE_PATH = "/usr/bin/node"
        NPM_PATH = "/usr/bin/npm"
        BUILD_START_TIME = "${System.currentTimeMillis()}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    def startTime = System.currentTimeMillis()
                    sh 'rm -rf *'  // Clean workspace before cloning
                    git branch: 'master', url: "https://github.com/anshsehgal13/ChatApp/"
                    sh 'ls -R'  // Debug: List all files in workspace
                    def endTime = System.currentTimeMillis()
                    def duration = (endTime - startTime) / 1000 // Time in seconds
                    
                    def metadata = [
                        "pipelineName": env.JOB_NAME,
                        "buildNumber": env.BUILD_NUMBER,
                        "stepName": "Clone Repository",
                        "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                        "duration": duration,
                        "status": currentBuild.result
                    ]
                    writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
                }
            }
        }

        stage('Check Node & NPM Versions') {
            steps {
                script {
                    def startTime = System.currentTimeMillis()
                    sh '${NODE_PATH} -v'
                    sh '${NPM_PATH} -v'
                    def endTime = System.currentTimeMillis()
                    def duration = (endTime - startTime) / 1000
                    
                    def metadata = [
                        "pipelineName": env.JOB_NAME,
                        "buildNumber": env.BUILD_NUMBER,
                        "stepName": "Check Node & NPM Versions",
                        "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                        "duration": duration,
                        "status": currentBuild.result
                    ]
                    writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def startTime = System.currentTimeMillis()
                    sh 'if [ -f package.json ]; then ${NPM_PATH} install; else echo "package.json missing"; exit 1; fi'
                    def endTime = System.currentTimeMillis()
                    def duration = (endTime - startTime) / 1000
                    
                    def metadata = [
                        "pipelineName": env.JOB_NAME,
                        "buildNumber": env.BUILD_NUMBER,
                        "stepName": "Install Dependencies",
                        "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                        "duration": duration,
                        "status": currentBuild.result
                    ]
                    writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
                }
            }
        }

        stage('Build App') {
            steps {
                script {
                    def startTime = System.currentTimeMillis()
                    sh '${NPM_PATH} run build'
                    def endTime = System.currentTimeMillis()
                    def duration = (endTime - startTime) / 1000
                    
                    def metadata = [
                        "pipelineName": env.JOB_NAME,
                        "buildNumber": env.BUILD_NUMBER,
                        "stepName": "Build App",
                        "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                        "duration": duration,
                        "status": currentBuild.result
                    ]
                    writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
                }
            }
        }
    }

    post {
        success {
            script {
                def metadata = [
                    "pipelineName": env.JOB_NAME,
                    "buildNumber": env.BUILD_NUMBER,
                    "stepName": "Build Completed",
                    "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                    "duration": currentBuild.duration / 1000,  // Duration in seconds
                    "status": currentBuild.result
                ]
                writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
            }
        }
        failure {
            script {
                def metadata = [
                    "pipelineName": env.JOB_NAME,
                    "buildNumber": env.BUILD_NUMBER,
                    "stepName": "Build Failed",
                    "time": new java.text.SimpleDateFormat('yyyy-MM-dd HH:mm:ss').format(new java.util.Date()),
                    "duration": currentBuild.duration / 1000,  // Duration in seconds
                    "status": currentBuild.result
                ]
                writeJSON(file: 'pipeline_metadata.json', json: metadata, append: true)
            }
        }
    }
}

