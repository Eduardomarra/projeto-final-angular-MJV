import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  title = 'Animes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  animes = [
    {
      id: 1,
      src: '../../../../../assets/images/animes/dragon-ball.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 2,
      src: '../../../../../assets/images/animes/goku.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 3,
      src: '../../../../../assets/images/animes/naruto-2.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 4,
      src: '../../../../../assets/images/animes/naruto.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 5,
      src: '../../../../../assets/images/animes/one-piece.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 6,
      src: '../../../../../assets/images/animes/sailor-moon.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 7,
      src: '../../../../../assets/images/animes/yuyu.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 8,
      src: '../../../../../assets/images/animes/zodiaco-2.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 9,
      src: '../../../../../assets/images/animes/zodiaco.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
