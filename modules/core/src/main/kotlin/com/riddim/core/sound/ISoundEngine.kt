package com.riddim.core.sound

interface ISoundEngine {
    fun play(event: SoundEvent): Receipt
}
