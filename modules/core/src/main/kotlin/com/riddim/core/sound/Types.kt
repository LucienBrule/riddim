package com.riddim.core.sound

import java.util.UUID

data class SoundId(val value: String = UUID.randomUUID().toString())

data class SoundEvent(
    val id: SoundId = SoundId(),
    val type: String = "",
    val parameters: Map<String, Any> = emptyMap()
)

data class Receipt(
    val soundId: SoundId,
    val status: String,
    val message: String? = null
)
