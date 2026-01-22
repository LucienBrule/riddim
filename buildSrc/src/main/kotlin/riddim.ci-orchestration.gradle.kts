import org.gradle.api.tasks.Exec

plugins {
    base
}

tasks.register<Exec>("docsBundle") {
    group = "documentation"
    description = "Bundles Antora docs and Vite shell"
    workingDir = file("docs")
    commandLine("npm", "run", "docs:bundle")
}

tasks.register<Exec>("docsBuild") {
    group = "documentation"
    description = "Builds Antora docs"
    workingDir = file("docs")
    commandLine("npm", "run", "docs:build")
}

tasks.register<Exec>("webInstall") {
    group = "web"
    description = "Installs web dependencies"
    workingDir = file("web")
    commandLine("npm", "install")
}

tasks.register<Exec>("webBuild") {
    group = "web"
    description = "Builds the web application"
    dependsOn("webInstall")
    workingDir = file("web")
    commandLine("npm", "run", "build")
}

tasks.register<Exec>("assetsDashboard") {
    group = "verification"
    description = "Generates the assets dashboard"
    commandLine("./scripts/generate_dashboard.sh")
}

tasks.register<Exec>("dockerBuild") {
    group = "deployment"
    description = "Builds all Docker images"
    dependsOn(subprojects.map { it.tasks.matching { t -> t.name == "build" } })
    dependsOn("webBuild")
    commandLine("make", "docker-build")
}

tasks.register<Exec>("dockerUp") {
    group = "deployment"
    description = "Starts the system using Docker Compose"
    commandLine("make", "docker-up")
}

tasks.register<Exec>("dockerDown") {
    group = "deployment"
    description = "Stops the system using Docker Compose"
    commandLine("make", "docker-down")
}

tasks.register<Exec>("dockerPs") {
    group = "deployment"
    description = "Lists running containers"
    commandLine("make", "docker-ps")
}

tasks.register("verifyAll") {
    group = "verification"
    description = "Executes the full verification flow"
    
    dependsOn(subprojects.map { it.tasks.matching { t -> t.name == "build" } })
    dependsOn(subprojects.map { it.tasks.matching { t -> t.name == "test" } })
    
    if (!project.hasProperty("skipDocs")) {
        dependsOn("docsBundle")
    }
    
    if (!project.hasProperty("skipWeb")) {
        dependsOn("webBuild")
    }
    
    if (!project.hasProperty("skipDocker")) {
        dependsOn("dockerBuild")
    }
    
    dependsOn("assetsDashboard")
}

tasks.register("ci") {
    group = "verification"
    description = "Alias for verifyAll"
    dependsOn("verifyAll")
}
