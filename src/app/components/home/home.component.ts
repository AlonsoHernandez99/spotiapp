import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  error: boolean;
  loading: boolean;
  mensajeError: string;

  constructor(
    private service: SpotifyService
  ) { this.loading = true; this.error = false; }

  ngOnInit(): void {
    this.service.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, (errorService) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = errorService.error.error.message;
    });
  }

}
