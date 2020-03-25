import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQARk9vGui8SimMBnKhyaE7-YCP-hE4KxZaOMI7vm137WvDzwZ6plcWtzvvMK59MR1qfiD_vHqT5tJ89oY8'
    });

    return this.http.get(url, { headers });
  }
  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(filter: string) {

    return this.getQuery(`search?query=${filter}&type=artist&offset=0&limit=10`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map((data: any) => data.tracks));
  }
}