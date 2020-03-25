import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.service.getArtist(id).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.service.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });
  }

}
