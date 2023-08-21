import { Injectable } from '@nestjs/common';
const BASE_URL = "http://localhost:3030/tracks";
import { Track } from './track.interface';
import * as fs from "fs";

@Injectable()
export class TrackService {
    async getTracks(): Promise<Track[]> {
        const res = await fetch(BASE_URL);
        const parsed = await res.json();
        // console.log(parsed);
        return parsed;

        // codigo del ejemplo de Braian Aued
        // let listadoDeCanciones: string = fs.readFileSync("canciones.txt","utf8");
        // let arregloCanciones: string[]= listadoDeCanciones.split(" ");
        // return arregloCanciones;
    }
    // getTracks(): iTrack[] {
    //     return tracks;
    //   }
    insertTrack(pTrack: string): void {
        fs.appendFileSync("canciones.txt", "\n" + pTrack)
    }
    deleteTrack(idTrack: string): void {
        fs.writeFileSync("canciones.txt", "" )
    }
    editTrack(pTrack: string): void {
        fs.writeFileSync("canciones.txt", "\n" + pTrack)
    }
}
