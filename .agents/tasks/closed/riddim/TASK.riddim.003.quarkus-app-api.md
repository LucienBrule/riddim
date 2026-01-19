# TASK.riddim.003.quarkus-app-api — Quarkus app-api Implementation

## Goal
Implement the Quarkus application in `modules:app-api` with a REST endpoint.

## Actions
- Configure `app-api/build.gradle.kts` with Quarkus and Kotlin
- Create `SoundResource` with `POST /sound/play`
- Wire `ISoundEngine` using CDI
- Ensure `quarkusDev` starts
