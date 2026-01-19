package com.riddim.playback

import com.riddim.model.BeatTime
import com.riddim.model.TempoBpm
import jakarta.enterprise.context.ApplicationScoped

@ApplicationScoped
class Clock {
    var tempo: TempoBpm = TempoBpm(120.0)
    private var startTimeNanos: Long = System.nanoTime()

    fun currentBeat(): BeatTime {
        val elapsedNanos = System.nanoTime() - startTimeNanos
        val elapsedSeconds = elapsedNanos / 1_000_000_000.0
        val beatsPerSecond = tempo.value / 60.0
        return BeatTime(elapsedSeconds * beatsPerSecond)
    }
    
    fun beatToNanos(beat: BeatTime): Long {
        val beatsPerSecond = tempo.value / 60.0
        val seconds = beat.value / beatsPerSecond
        return (seconds * 1_000_000_000).toLong()
    }
    
    fun reset() {
        startTimeNanos = System.nanoTime()
    }
}
