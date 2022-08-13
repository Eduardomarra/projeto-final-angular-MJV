import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  title = 'Series';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  series = [
    {
      id: 1,
      src: '../../../../../assets/images/series/breaking.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 2,
      src: '../../../../../assets/images/series/chris.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 3,
      src: '../../../../../assets/images/series/dark.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 4,
      src: '../../../../../assets/images/series/friends.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 5,
      src: '../../../../../assets/images/series/sandman.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 6,
      src: '../../../../../assets/images/series/stranger.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 7,
      src: '../../../../../assets/images/series/swat.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 8,
      src: '../../../../../assets/images/series/the-100.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    },
    {
      id: 9,
      src: '../../../../../assets/images/series/walking-dead.svg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
