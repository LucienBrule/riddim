# riddim

[![CI](https://github.com/LucienBrule/riddim/actions/workflows/ci.yml/badge.svg)](https://github.com/LucienBrule/riddim/actions/workflows/ci.yml)
[![Docs](https://github.com/LucienBrule/riddim/actions/workflows/docs.yml/badge.svg)](https://github.com/LucienBrule/riddim/actions/workflows/docs.yml)
[![Docs Site](https://img.shields.io/badge/docs-live-brightgreen)](https://lucienbrule.github.io/riddim)

Live-coding music environment bridging a Kotlin DSL with SuperCollider via OSC.

Tags: Kotlin, DSL, SuperCollider, OSC, Live Coding

Docs: https://lucienbrule.github.io/riddim

## Build Status

CI runs `./gradlew build` across: core, model, engine-supercollider, playback, dsl, app-api.
See [ASSETS_DASHBOARD.md](ASSETS_DASHBOARD.md) for the latest artifact matrix.

---

## 🗂 `riddim/` – Root Directory Layout

```
riddim/
├── build.gradle.kts           # Root build file
├── settings.gradle.kts        # Module includes
├── gradle/                    # Shared build logic (if needed)
├── docker/                    # SuperCollider container setup
├── scripts/                   # Dev helpers, test runners
├── dev/                       # Examples, scratch DSLs
├── README.md
└── modules/                   # All main app modules
```

---

## 🧱 `modules/` — Core Modular Layout

See [LINKAGE.md](LINKAGE.md) for a detailed dependency graph.

```
modules/
├── core/                      # Interfaces, base types (ISoundEngine, Timing)
├── dsl/                       # Type-safe Kotlin builders (song, verse, bar)
├── engine-supercollider/     # Sound engine impl, OSC transport
├── app-api/                  # Quarkus REST/CLI application
├── model/                    # Shared data types (Syllable, Word, BeatTime)
├── ml-assist/                # (Optional) ML alignment + cadence inference
└── playback/                 # DSL → Event scheduler + tick loop
```

---

## 🔄 Package Naming Convention (Reverse-DNS)

```
com.riddim.core
com.riddim.dsl
com.riddim.sound.supercollider
com.riddim.api
com.riddim.model
com.riddim.ml
com.riddim.runtime
```

---

## 🔧 Tooling / Dependencies

* Kotlin (JVM 17+)
* Gradle Kotlin DSL
* Quarkus (core runtime, RESTEasy Reactive, CDI)
* `kotlinx.serialization` (shared model + export)
* `ktor-client` (if any outbound needs)
* `osc-java` or custom UDP layer (to SuperCollider)
* JUnit + TestContainers (optional for SuperCollider E2E)

---

## 🔥 First Build Targets

1. **`core:`**

   * `ISoundEngine`
   * `SoundEvent`, `Pattern`, `BeatTime`

2. **`engine-supercollider:`**

   * UDP client to `localhost:57120`
   * Sends `/dirt/play` messages

3. **`app-api:`**

   * REST `POST /play` with a JSON event
   * Simple CLI runner: `./gradlew run`

4. **`dsl:`**

   * First `song { bar { word("fire") } }` builder

---
