pipeline {
    agent any
    tools {nodejs "nodejs"}
    options {
        timeout(time: 30, unit: 'MINUTES')
    }
    stages {
        stage("build") {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
