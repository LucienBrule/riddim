package com.riddim.dsl

import com.riddim.core.sound.SoundEvent
import com.riddim.model.BeatTime

data class Song(val events: List<Pair<BeatTime, SoundEvent>>)

class SongBuilder {
    private val events = mutableListOf<Pair<BeatTime, SoundEvent>>()
    var currentBeat = 0.0

    fun sound(type: String, params: Map<String, Any> = emptyMap()) {
        events.add(BeatTime(currentBeat) to SoundEvent(type = type, parameters = params))
    }

    fun pause(beats: Double) {
        currentBeat += beats
    }

    fun build(): Song = Song(events)
}

fun song(init: SongBuilder.() -> Unit): Song {
    val builder = SongBuilder()
    builder.init()
    return builder.build()
}
