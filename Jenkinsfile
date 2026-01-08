pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Deepanshu-Sehgal/portfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("portfolio-react:latest")
                }
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop portfolio || true
                docker rm portfolio || true
                docker run -d -p 80:80 --name portfolio portfolio-react:latest
                '''
            }
        }
    }
}
