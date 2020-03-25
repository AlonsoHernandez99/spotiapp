import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  showArtist(item: any) {
    let artistId = item.type === 'artist' ? item.id : item.artists[0].id;
    this.router.navigate(['artist', artistId]);
  }
}
