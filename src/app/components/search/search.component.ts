import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  error: boolean;
  loading: boolean;
  mensajeError: string;

  constructor(
    private service: SpotifyService
  ) { this.loading = false;this.error = false; }

  ngOnInit(): void {
  }

  searchArtits(value: string) {
    if (value !== '') {
      this.loading = true;
      this.service.getArtists(value)
        .subscribe((data: any) => {
          this.artists = data;
          this.loading = false;
        }, (errorService) => {
          this.error = true;
          this.loading = false;
          this.mensajeError = errorService.error.error.message;
        });
    }
  }
}
