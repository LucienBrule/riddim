package com.riddim.api

import com.riddim.core.sound.ISoundEngine
import com.riddim.core.sound.SoundEvent
import com.riddim.core.sound.Receipt
import jakarta.inject.Inject
import jakarta.ws.rs.Consumes
import jakarta.ws.rs.GET
import jakarta.ws.rs.POST
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType

@Path("/sound")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
class SoundResource {

    @Inject
    lateinit var soundEngine: ISoundEngine

    @POST
    @Path("/play")
    fun play(event: SoundEvent): Receipt {
        return soundEngine.play(event)
    }
}
