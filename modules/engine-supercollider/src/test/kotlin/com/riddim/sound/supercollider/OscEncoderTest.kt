package com.riddim.sound.supercollider

import kotlin.test.Test
import kotlin.test.assertContentEquals

class OscEncoderTest {
    private val encoder = SimpleOscEncoder() // Still using this for now, will fail

    @Test
    fun `encodes simple message with one string argument`() {
        val message = OscMessage("/dirt/play", listOf("kick"))
        val encoded = encoder.encode(message)
        
        // Expected:
        // / d i r t / p l a y \0 \0 (12)
        // , s \0 \0 (4)
        // k i c k \0 \0 \0 \0 (8)
        val expected = byteArrayOf(
            '/'.code.toByte(), 'd'.code.toByte(), 'i'.code.toByte(), 'r'.code.toByte(), 
            't'.code.toByte(), '/'.code.toByte(), 'p'.code.toByte(), 'l'.code.toByte(), 
            'a'.code.toByte(), 'y'.code.toByte(), 0, 0,
            ','.code.toByte(), 's'.code.toByte(), 0, 0,
            'k'.code.toByte(), 'i'.code.toByte(), 'c'.code.toByte(), 'k'.code.toByte(), 0, 0, 0, 0
        )
        
        assertContentEquals(expected, encoded)
    }
}
