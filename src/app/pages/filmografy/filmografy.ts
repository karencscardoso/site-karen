import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { Film, TypeFilm } from '../../../core/models/Film';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ButtonGeneric } from '../../shared/button-generic/button-generic';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-filmografy',
  standalone: true,
  imports: [
    MatGridListModule,
    MatIconModule,
    ButtonGeneric,
  ],
  templateUrl: './filmografy.html',
  styleUrl: './filmografy.scss',
})
export class Filmografy implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private cdr = inject(ChangeDetectorRef);
  
  cols = 3;
  @Input() filmData!: Film;

ngOnInit(): void {
  this.breakpointObserver.observe([
   '(max-width: 644px)', // Celular 
    '(min-width: 645px) and (max-width: 949px)', // Tablet
    '(min-width: 950px)' // Desktop
  ]).subscribe(result => {
    if (result.breakpoints['(max-width: 644px)']) {
      this.cols = 1; // 1 coluna no celular
    } else if (result.breakpoints['(min-width: 645px) and (max-width: 949px)']) {
      this.cols = 2; // 2 colunas no tablet
    } else {
      this.cols = 3; // 3 colunas no desktop
    }
    this.cdr.detectChanges();
  });
  }

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
      img: '',
      name: 'Cine Holliúdy',
      year: 2017,
      type: 'Series',
      directorFotografy: 'Carina Sanginitto',
      director: 'Halder Gomes',
      function: 'Vídeo Assist'
    },
   {
      img: '/irmandade.webp',
      name: 'Irmandade 2ª Temporada',
      year: 2022,
      type: 'Series',
      directorFotografy: 'Kaue Zilli',
      director: '---',
      function: 'Extra Vídeo Assist'
    },
    {
      img: '/rota66.webp',
      name: 'Rota 66',
      year: 2022,
      type: 'Series',
      directorFotografy: 'Eduardo Piagge e Pedro Mafei',
      director: '---',
      function: 'Extra Vídeo Assist'
    },
    {
      img: '',
      name: 'Mulher Papaya',
      year: 2024,
      type: 'Short Film',
      directorFotografy: 'Giovanna Pezzo',
      director: 'Camila Tarifa',
      function: '2nd Assistant Camera'
    },
    {
      img: '',
      name: 'Rauls',
      year: 2026,
      type: 'Series',
      directorFotografy: 'Glauco Firpo',
      director: 'Kaike Alves',
      function: '2nd Assistant Camera'
    },
    {
      img: '',
      name: 'Véspera',
      year: 2025,
      type: 'Series',
      directorFotografy: 'Glauco Firpo',
      director: 'Joana Jabace e Talita',
      function: '2nd Assistant Camera'
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
      function: 'Extra Vídeo Assist'
    },
    {
      img: '/a-super-fantastica-historia-do-balao.jpg',
      name: 'História do Balão',
      year: 2022,//2023
      type: 'Documentary',
      directorFotografy: 'Edmur Epifanio e Fabio Porcelli',
      director: 'Tatiana Issa',
      function: '2nd Assistant Camera'
    },
    {
      img: '/dona-elza.webp',
      name: 'Dona Elza',
      year: 2024,
      type: 'Telenovela',
      directorFotografy: 'Giovanna Pezzo',
      director: 'Diego da Costa e Hiro Ishikawa',
      function: '2nd Assistant Camera'
    },
    {
      img: '/cyclone.webp',
      name: 'Cyclone',
      year: 2023,//2025
      type: 'Feature Film',
      directorFotografy: 'Heloísa Passos',
      director: 'Flávia Castro',
      function: '2nd Assistant Camera'
    },
    {
      img: '',
      name: 'As Vitrines',
      year: 2023,//2025
      type: 'Feature Film',
      directorFotografy: 'Heloísa Passos',
      director: 'Flávia Castro',
      function: '2nd Assistant Camera'
    },
    {
      img: '/apanhador-de-almas.webp',
      name: 'Apanhador de Almas',
      year: 2022,//2025
      type: 'Feature Film',
      directorFotografy: 'Giovanna Pezzo',
      director: 'Fernando Alonso e Nelson Botter Jr.',
      function: '2nd Assistant Camera'
    },
    {
      img: '/sutura.webp',
      name: 'Sutura',
      year: 2024,
      type: 'Series',
      directorFotografy: 'Eduardo Piagge e Júlia Éqüi',
      director: 'Diego Martins e Jéssica Queiroz',
      function: '2nd Assistant Camera'
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
      function: '2nd Assistant Camera'
    },
    {
      img: '/copa-do-caos.webp',
      name: 'Copa do Caos',
      year: 2014,
      type: 'Short Film',
      directorFotografy: 'Lico Queiroz',
      director: '---',
      function: 'Camera Intern'
    },
    {
      img: '',
      name: 'Motel',
      year: 2014,
      type: 'Series',
      directorFotografy: '---',
      director: 'Fabrizia Pinto',
      function: 'Camera Intern'
    },
    {
      img: '/amor-em-sampa.webp',
      name: 'Amor em Sampa',
      year: 2013,
      type: 'Feature Film',
      directorFotografy: 'Marcelo Trotta',
      director: 'Carlos Alberto Riccelli e Kim Riccelli',
      function: 'Editing Assistant'
    },
    {
      img: '/pedro-e-bianca.webp',
      name: 'Pedro e Bianca',
      year: 2013,
      type: 'Series',
      directorFotografy: 'Pedro Eliezer, Sérgio Isidoro',
      director: 'Fábio Mendonça',
      function: 'Editing Assistant'
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
