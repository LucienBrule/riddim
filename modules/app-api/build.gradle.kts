plugins {
    id("io.quarkus") version "3.6.4"
    kotlin("jvm")
    kotlin("plugin.allopen") version "1.9.22"
}

dependencies {
    implementation(enforcedPlatform("io.quarkus.platform:quarkus-bom:3.6.4"))

    implementation(project(":modules:core"))
    implementation(project(":modules:model"))
    implementation(project(":modules:engine-supercollider")) // To allow CDI to find the implementation

    implementation("io.quarkus:quarkus-kotlin")
    implementation("io.quarkus:quarkus-resteasy-reactive")
    implementation("io.quarkus:quarkus-resteasy-reactive-jackson")
    implementation("io.quarkus:quarkus-arc")

    testImplementation("io.quarkus:quarkus-junit5")
}

allOpen {
    annotation("jakarta.enterprise.context.ApplicationScoped")
    annotation("jakarta.enterprise.context.RequestScoped")
    annotation("jakarta.ws.rs.Path")
}
