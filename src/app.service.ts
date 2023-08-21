import { Injectable } from '@nestjs/common';

// export interface iTrack {
//   id: number;
//   title: string;
//   duration: number,
//   artist: string
// }
// const tracks: iTrack[] = [
//   { id: 1, title: "a", duration: 352, artist: "u2" },
//   { id: 2, title: "b", duration: 312, artist: "inxs" }
// ]

@Injectable()
export class AppService {
  // getTracks(): iTrack[] {
  //   return tracks;
  // }
  getHello(): string {
    return 'Hello World!';
  }
}
