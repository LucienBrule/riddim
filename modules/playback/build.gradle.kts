dependencies {
    implementation(project(":modules:core"))
    implementation(project(":modules:model"))
    compileOnly("jakarta.enterprise:jakarta.enterprise.cdi-api:4.0.1")
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
