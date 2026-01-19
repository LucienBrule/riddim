package com.riddim.sound.supercollider

import java.io.ByteArrayOutputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder

data class OscMessage(
    val address: String,
    val arguments: List<Any>
)

interface OscEncoder {
    fun encode(message: OscMessage): ByteArray
}

class SimpleOscEncoder : OscEncoder {
    override fun encode(message: OscMessage): ByteArray {
        val output = ByteArrayOutputStream()

        // 1. Address
        writeOscString(output, message.address)

        // 2. Type tags
        val tags = StringBuilder(",")
        for (arg in message.arguments) {
            when (arg) {
                is String -> tags.append("s")
                is Int -> tags.append("i")
                is Double -> tags.append("f") // Handle Double as float for convenience
                is Float -> tags.append("f")
                else -> throw IllegalArgumentException("Unsupported OSC type: ${arg.javaClass}")
            }
        }
        writeOscString(output, tags.toString())

        // 3. Arguments
        for (arg in message.arguments) {
            when (arg) {
                is String -> writeOscString(output, arg)
                is Int -> writeInt(output, arg)
                is Double -> writeFloat(output, arg.toFloat())
                is Float -> writeFloat(output, arg)
            }
        }

        return output.toByteArray()
    }

    private fun writeOscString(output: ByteArrayOutputStream, s: String) {
        val bytes = s.toByteArray(Charsets.US_ASCII)
        output.write(bytes)
        output.write(0) // Null terminator
        var pad = 4 - ((bytes.size + 1) % 4)
        if (pad == 4) pad = 0
        repeat(pad) { output.write(0) }
    }

    private fun writeInt(output: ByteArrayOutputStream, i: Int) {
        val b = ByteBuffer.allocate(4).order(ByteOrder.BIG_ENDIAN).putInt(i).array()
        output.write(b)
    }

    private fun writeFloat(output: ByteArrayOutputStream, f: Float) {
        val b = ByteBuffer.allocate(4).order(ByteOrder.BIG_ENDIAN).putFloat(f).array()
        output.write(b)
    }
}
