package com.riddim.sound.supercollider

import com.riddim.core.sound.ISoundEngine
import com.riddim.core.sound.SoundEvent
import com.riddim.core.sound.Receipt
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import org.eclipse.microprofile.config.inject.ConfigProperty
import java.net.DatagramPacket
import java.net.DatagramSocket
import java.net.InetAddress

@ApplicationScoped
class SuperColliderSoundEngine : ISoundEngine {
    @Inject
    @ConfigProperty(name = "riddim.engine.supercollider.host", defaultValue = "localhost")
    lateinit var host: String

    @Inject
    @ConfigProperty(name = "riddim.engine.supercollider.port", defaultValue = "57120")
    var port: Int = 57120

    private val encoder: OscEncoder = SimpleOscEncoder()

    override fun play(event: SoundEvent): Receipt {
        val oscMessage = OscMessage("/dirt/play", listOf(event.type) + event.parameters.values.toList())
        val data = encoder.encode(oscMessage)
        
        try {
            DatagramSocket().use { socket ->
                val address = InetAddress.getByName(host)
                val packet = DatagramPacket(data, data.size, address, port)
                socket.send(packet)
            }
        } catch (e: Exception) {
            return Receipt(event.id, "ERROR", e.message)
        }

        return Receipt(event.id, "SENT")
    }
}
