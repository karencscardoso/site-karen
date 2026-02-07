import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { Film } from '../../../core/models/Film';

@Component({
  selector: 'app-card-film',
  imports: [
    MatIconModule,
    MatGridListModule
  ],
  templateUrl: './card-film.html',
  styleUrl: './card-film.scss',
})
export class CardFilm {
  @Input() filmData!: Film;
}
