import { Component } from '@angular/core';
import { Film, TypeFilm } from '../../../core/models/Film';
import { CardFilm } from '../../shared/card-film/card-film';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonGeneric } from '../../shared/button-generic/button-generic';

@Component({
  selector: 'app-filmografy',
  imports: [
    CardFilm,
    MatGridListModule,
    ButtonGeneric
  ],
  templateUrl: './filmografy.html',
  styleUrl: './filmografy.scss',
})
export class Filmografy {
  types: TypeFilm[] = [
    { type: 'Documentário' },
    { type: 'Série' },
    { type: 'Curta-metragem' },
    { type: 'Longa-metragem' },
    { type: 'Videoclipe' },
    { type: 'Tele Novela' }
  ]
  
  films: Film[] = [
{
    name: 'O Caseiro',
    year: 2016,
    type: 'Longa-metragem',
    directorFotografy: 'Ulrich Burtin',
    director: 'Julio Santi',
    function: 'Vídeo Assist'
  },
  {
    name: 'Os Parças',
    year: 2017,
    type: 'Longa-metragem',
    directorFotografy: 'Carina Sanginitto',
    director: 'Halder Gomes',
    function: 'Vídeo Assist'
  },
  {
    name: 'Mauá - O Primeiro Gigante',
    year: 2019,
    type: 'Documentário',
    directorFotografy: 'Eduardo Piagge',
    director: 'Fernando Honesko',
    function: 'Vídeo Assist'
  },
  {
    name: 'Depois do Universo',
    year: 2022,
    type: 'Longa-metragem',
    directorFotografy: 'Kaue Zilli',
    director: 'Diego Freitas',
    function: 'Vídeo Assist'
  },
  {
    name: 'A Superfantástica História do Balão',
    year: 2023,
    type: 'Documentário',
    directorFotografy: 'Edmur Epifanio e Fabio Porcelli',
    director: 'Tatiana Issa',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Dona Elza',
    year: 2024,
    type: 'Tele Novela',
    directorFotografy: 'Giovanna Pezzo',
    director: 'Diego da CostaHiro e Ishikawa',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Cyclone',
    year: 2025,
    type: 'Longa-metragem',
    directorFotografy: 'Heloísa Passos',
    director: 'Flávia Castro',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'As Vitrines',
    year: 2025,
    type: 'Longa-metragem',
    directorFotografy: 'Heloísa Passos',
    director: 'Flávia Castro',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Apanhador de Almas',
    year: 2025,
    type: 'Longa-metragem',
    directorFotografy: 'Giovanna Pezzo',
    director: 'Fernando Alonso e Nelson Botter Jr.',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Sutura',
    year: 2024,
    type: 'Série',
    directorFotografy: 'Eduardo Piagge e Júlia Éqüi',
    director: 'Diego Martins e Jéssica Queiroz',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Olhar Indiscreto',
    year: 2021,
    type: 'Série',
    directorFotografy: 'Júlia Éqüi',
    director: 'Luciana de Oliveira, Fabrizia Pinto, Letícia Veiga',
    function: '2ª Assistente de Câmera'
  },
  {
    name: 'Aurora',
    year: 2025,
    type: 'Curta-metragem',
    directorFotografy: 'Otávio Puppo',
    director: '---',
    function: '2ª Assistente de Câmera'
  }

  ].sort((a, b) => b.year - a.year);
}
