import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Track } from './track.interface';
import { TrackService } from './track.service';

@Controller('tracks')
export class TrackController {
    constructor(private readonly trackService: TrackService) { }

    @Get() //READ
    getTracks(): Promise<Track[]> {
        return this.trackService.getTracks();
    }

    // @Get('/:id')
    // getTrackById(@Param('id') id: number): Promise<Track> {
    //   return this.trackService.getTrackById(id);
    // }
    
    @Post() //CREATE
    insertTrack(@Body("cancion") nombre: string) {
        this.trackService.insertTrack(nombre);
    }

    @Put() //UPDATE
    editTrack(@Body("cancion") nombre: string) {
        let json = { cancion: "algo" };
        this.trackService.editTrack(nombre)
    }

    @Delete() //DELETE
    deleteTrack(@Body("cancion") id: string) {
        this.trackService.deleteTrack(id);
    }
}
