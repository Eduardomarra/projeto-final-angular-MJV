import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  title = 'Filmes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  filmes = [
    {
      id: 1,
      src: '../../../../../assets/images/filmes/batman_superman.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 2,
      src: '../../../../../assets/images/filmes/batman.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 3,
      src: '../../../../../assets/images/filmes/faster.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 4,
      src: '../../../../../assets/images/filmes/interestelar.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 5,
      src: '../../../../../assets/images/filmes/Kombat.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 6,
      src: '../../../../../assets/images/filmes/sonic.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 7,
      src: '../../../../../assets/images/filmes/terror.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 8,
      src: '../../../../../assets/images/filmes/valente.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 9,
      src: '../../../../../assets/images/filmes/avatar.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
