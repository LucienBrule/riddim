plugins {
    kotlin("jvm") version "1.9.22" apply false
    id("riddim.ci-orchestration")
}

allprojects {
    group = "com.riddim"
    version = "0.1.0-SNAPSHOT"

    repositories {
        mavenCentral()
    }
}

subprojects {
    if (path == ":modules") return@subprojects

    apply(plugin = "org.jetbrains.kotlin.jvm")

    configure<org.gradle.api.plugins.JavaPluginExtension> {
        toolchain {
            languageVersion.set(JavaLanguageVersion.of(17))
        }
    }
}
