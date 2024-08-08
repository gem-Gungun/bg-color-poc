node {
    def gitUrl = 'https://github.com/gem-Gungun/bg-color-poc.git'
    def branch = 'master'
    def credentialsId = 'ca4e208b-871a-4f05-a4c6-5e6b046dad30'
    def nexusUrl = 'localhost:8082/repository/bg-color/'
    def dockerImageName = 'bg-color'
    def dockerTag = 'latest'
    def nexusCredentialsId = '786b567f-79d3-477e-bd79-8c0014f1e9ff'
    def kube = 'k1'
    def DOCKER_PATH = 'C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe'
    def KUBE_CONFIG_PATH = "C:\\Users\\Gungun.Sharma\\.kube\\config"

    def dockerTool = tool name: 'docker'

    stage('Clone repository') {
        try {
            // Checkout the git repository using the credentials
            git branch: branch, url: gitUrl, credentialsId: credentialsId
        } catch (Exception e) {
            error "Failed to clone repository: ${e}"
        }
    }

    stage('Build React Application') {
        try {
            bat "npm install"
            // bat "npm run dev"
        } catch (Exception e) {
            error "Failed to build React application: ${e}"
        }
    }

    stage('Build Docker Image') {
        try {
            // Build the Docker image using Windows-compatible command
            bat "docker build -t ${dockerImageName}:${dockerTag} ."
        } catch (Exception e) {
            error "Failed to build Docker image: ${e}"
        }
    }

    stage('Push Docker Image to Nexus') {
        try {
            // Perform Docker login and push actions
            docker.withRegistry('http://' + nexusUrl, nexusCredentialsId) {
                bat "\"${DOCKER_PATH}\" tag ${dockerImageName}:latest ${nexusUrl}${dockerImageName}:latest"
                    // Push the Docker image to Nexus repository
                bat "\"${DOCKER_PATH}\" push ${nexusUrl}${dockerImageName}:latest"
        
            }
        } catch (Exception e) {
            error "Failed to push Docker image to Nexus: ${e}"
        }
    }
    stage('Deploy to Minikube') {
        withEnv(["KUBECONFIG=${KUBE_CONFIG_PATH}"]) {
            // bat "kubectl version"
            bat "kubectl apply -f deployment.yaml"
            bat "kubectl apply -f service.yaml"
            

            // bat "kubectl get pods"
        }
        echo "Deployment Successful....."
    }
    
}
    

