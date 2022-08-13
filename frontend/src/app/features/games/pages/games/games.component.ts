import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  title = 'Games';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  games = [
    {
      id: 1,
      src: '../../../../../assets/images/games/crew.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 2,
      src: '../../../../../assets/images/games/dead.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 3,
      src: '../../../../../assets/images/games/ghost.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 4,
      src: '../../../../../assets/images/games/god.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 5,
      src: '../../../../../assets/images/games/halo.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 6,
      src: '../../../../../assets/images/games/horizon.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 7,
      src: '../../../../../assets/images/games/last-of-us.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 8,
      src: '../../../../../assets/images/games/spider.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 9,
      src: '../../../../../assets/images/games/uncharted-game.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
