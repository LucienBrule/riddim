dependencies {
    implementation(project(":modules:core"))
    compileOnly("jakarta.enterprise:jakarta.enterprise.cdi-api:4.0.1")
    compileOnly("org.eclipse.microprofile.config:microprofile-config-api:3.0.3")
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
