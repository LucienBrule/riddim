package com.riddim.playback

import com.riddim.core.sound.ISoundEngine
import com.riddim.core.sound.SoundEvent
import com.riddim.model.BeatTime
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import java.util.concurrent.PriorityBlockingQueue

data class ScheduledEvent(val beat: BeatTime, val event: SoundEvent) : Comparable<ScheduledEvent> {
    override fun compareTo(other: ScheduledEvent): Int = beat.value.compareTo(other.beat.value)
}

@ApplicationScoped
class Scheduler @Inject constructor(
    private val engine: ISoundEngine,
    private val clock: Clock
) {
    private val queue = PriorityBlockingQueue<ScheduledEvent>()
    private var running = false
    private var thread: Thread? = null

    fun schedule(beat: BeatTime, event: SoundEvent) {
        queue.add(ScheduledEvent(beat, event))
    }

    fun start() {
        if (running) return
        running = true
        thread = Thread {
            while (running) {
                val next = queue.peek()
                if (next != null) {
                    val currentBeat = clock.currentBeat()
                    if (currentBeat.value >= next.beat.value) {
                        queue.poll()
                        engine.play(next.event)
                    } else {
                        Thread.sleep(1) // Simple wait
                    }
                } else {
                    Thread.sleep(10)
                }
            }
        }.apply { 
            isDaemon = true
            start() 
        }
    }

    fun stop() {
        running = false
        thread?.join()
    }
}
