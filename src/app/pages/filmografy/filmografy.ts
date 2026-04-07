import { Component } from '@angular/core';
import { Film, TypeFilm } from '../../../core/models/Film';
import { CardFilm } from '../../shared/card-film/card-film';
import { MatGridListModule } from '@angular/material/grid-list';
import { ButtonGeneric } from '../../shared/button-generic/button-generic';
import { Toolbar } from '../../components/toolbar/toolbar';

@Component({
  selector: 'app-filmografy',
  standalone: true,
  imports: [
    Toolbar,
    CardFilm,
    MatGridListModule,
    ButtonGeneric,
  ],
  templateUrl: './filmografy.html',
  styleUrl: './filmografy.scss',
})
export class Filmografy {
  types: TypeFilm[] = [
    { type: 'All' },
    { type: 'Documentary' },
    { type: 'Series' },
    { type: 'Short Film' },
    { type: 'Feature Film' },
    { type: 'Telenovela' }
    // { type: 'Videoclipe' },
  ].sort((a, b) => {
    if(a.type === 'All') return -1;
    if(b.type === 'All') return 1;
    return a.type.localeCompare(b.type);
  });

  films: Film[] = [
   {
      img: '/irmandade.webp',
      name: 'Irmandade 2ª Temporada',
      year: 2022,
      type: 'Series',
      directorFotografy: 'Kaue Zilli',
      director: '---',
      function: 'Vídeo Assist Extra'
    },
    {
      img: '/rota66.webp',
      name: 'Rota 66',
      year: 2022,
      type: 'Series',
      directorFotografy: 'Eduardo Piagge e Pedro Mafei',
      director: '---',
      function: 'Vídeo Assist Extra'
    },
    {
      img: '',
      name: 'Mulher Papaya',
      year: 2024,
      type: 'Short Film',
      directorFotografy: 'Giovanna Pezzo',
      director: '---',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '',
      name: 'Rauls',
      year: 2026,
      type: 'Series',
      directorFotografy: 'Glauco Firpo',
      director: 'Kaike Alves',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '',
      name: 'Véspera',
      year: 2025,
      type: 'Series',
      directorFotografy: 'Glauco Firpo',
      director: 'Joana Jabace e Talita',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/o-caseiro.webp',
      name: 'O Caseiro',
      year: 2015,//2016
      type: 'Feature Film',
      directorFotografy: 'Ulrich Burtin',
      director: 'Julio Santi',
      function: 'Vídeo Assist'
    },
    {
      img: '/os-parcas.webp',
      name: 'Os Parças',
      year: 2017,
      type: 'Feature Film',
      directorFotografy: 'Carina Sanginitto',
      director: 'Halder Gomes',
      function: 'Vídeo Assist'
    },
    {
      img: '/maua.webp',
      name: 'Mauá - O Primeiro Gigante',
      year: 2018,//2019
      type: 'Documentary',
      directorFotografy: 'Eduardo Piagge',
      director: 'Fernando Honesko',
      function: 'Vídeo Assist'
    },
    {
      img: '/depois-do-universo.webp',
      name: 'Depois do Universo',
      year: 2022,
      type: 'Feature Film',
      directorFotografy: 'Kaue Zilli',
      director: 'Diego Freitas',
      function: 'Vídeo Assist Extra'
    },
    {
      img: '/a-super-fantastica-historia-do-balao.jpg',
      name: 'Superfantástica História do Balão',
      year: 2022,//2023
      type: 'Documentary',
      directorFotografy: 'Edmur Epifanio e Fabio Porcelli',
      director: 'Tatiana Issa',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/dona-elza.webp',
      name: 'Dona Elza',
      year: 2024,
      type: 'Telenovela',
      directorFotografy: 'Giovanna Pezzo',
      director: 'Diego da Costa e Hiro Ishikawa',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/cyclone.webp',
      name: 'Cyclone',
      year: 2023,//2025
      type: 'Feature Film',
      directorFotografy: 'Heloísa Passos',
      director: 'Flávia Castro',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '',
      name: 'As Vitrines',
      year: 2023,//2025
      type: 'Feature Film',
      directorFotografy: 'Heloísa Passos',
      director: 'Flávia Castro',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/apanhador-de-almas.webp',
      name: 'Apanhador de Almas',
      year: 2022,//2025
      type: 'Feature Film',
      directorFotografy: 'Giovanna Pezzo',
      director: 'Fernando Alonso e Nelson Botter Jr.',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/sutura.webp',
      name: 'Sutura',
      year: 2024,
      type: 'Series',
      directorFotografy: 'Eduardo Piagge e Júlia Éqüi',
      director: 'Diego Martins e Jéssica Queiroz',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/olhar-indiscreto.webp',
      name: 'Olhar Indiscreto',
      year: 2021,
      type: 'Series',
      directorFotografy: 'Júlia Éqüi',
      director: 'Luciana de Oliveira, Fabrizia Pinto, Letícia Veiga',
      function: 'Vídeo Assist'
    },
    {
      img: '',
      name: 'Aurora',
      year: 2024,
      type: 'Short Film',
      directorFotografy: 'Otávio Puppo',
      director: '---',
      function: '2ª Assistente de Câmera'
    },
    {
      img: '/copa-do-caos.webp',
      name: 'Copa do Caos',
      year: 2014,
      type: 'Short Film',
      directorFotografy: 'Lico Queiroz',
      director: '---',
      function: 'Estagiária Câmera'
    },
    {
      img: '',
      name: 'Motel',
      year: 2014,
      type: 'Series',
      directorFotografy: '---',
      director: 'Fabrizia Pinto',
      function: 'Estagiária Câmera'
    },
    {
      img: '/amor-em-sampa.webp',
      name: 'Amor em Sampa',
      year: 2013,
      type: 'Feature Film',
      directorFotografy: 'Marcelo Trotta',
      director: 'Carlos Alberto Riccelli e Kim Riccelli',
      function: 'Assistente de Edição'
    },
    {
      img: '/pedro-e-bianca.webp',
      name: 'Pedro e Bianca',
      year: 2013,
      type: 'Series',
      directorFotografy: 'Pedro Eliezer, Sérgio Isidoro',
      director: 'Fábio Mendonça',
      function: 'Assistente de Edição'
    }

  ].sort((a, b) => b.year - a.year);

  filteredFilms = [...this.films];

  filterByType(type: string) {
    if (type === 'All') {
      this.filteredFilms = [...this.films];
    } else {
      this.filteredFilms = this.films.filter(film => film.type === type);
    } 
  }
}
