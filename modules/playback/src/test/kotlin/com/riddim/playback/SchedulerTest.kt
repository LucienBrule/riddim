package com.riddim.playback

import com.riddim.core.sound.ISoundEngine
import com.riddim.core.sound.Receipt
import com.riddim.core.sound.SoundEvent
import com.riddim.model.BeatTime
import kotlin.test.Test
import kotlin.test.assertEquals
import java.util.concurrent.CopyOnWriteArrayList

class SchedulerTest {
    class MockEngine : ISoundEngine {
        val playedEvents = CopyOnWriteArrayList<SoundEvent>()
        override fun play(event: SoundEvent): Receipt {
            playedEvents.add(event)
            return Receipt(event.id, "PLAYED")
        }
    }

    @Test
    fun `schedules and plays events in order`() {
        val engine = MockEngine()
        val clock = Clock()
        val scheduler = Scheduler(engine, clock)
        
        scheduler.start()
        
        val event1 = SoundEvent(type = "kick")
        val event2 = SoundEvent(type = "snare")
        
        scheduler.schedule(BeatTime(0.1), event1)
        scheduler.schedule(BeatTime(0.2), event2)
        
        // Wait for clock to advance (clock uses System.nanoTime)
        Thread.sleep(500) // Should be enough for 0.2 beats at 120bpm
        
        assertEquals(2, engine.playedEvents.size)
        assertEquals("kick", engine.playedEvents[0].type)
        assertEquals("snare", engine.playedEvents[1].type)
        
        scheduler.stop()
    }
}
