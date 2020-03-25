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
  error: boolean;
  loading: boolean;
  mensajeError: string;

  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService
  ) { this.error = false; }

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
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
    });
  }

  getTopTracks(id: string) {
    this.service.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
    });
  }

}
