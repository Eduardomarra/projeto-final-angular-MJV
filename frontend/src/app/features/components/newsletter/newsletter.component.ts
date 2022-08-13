import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newsletter } from 'src/app/shared/model/newsletter.modal';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsletter: Newsletter[] = [
    {
      id: 1,
      src: '../../../../assets/images/news-image-1.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-25',
      category: 'animes'
    },
    {
      id: 2,
      src: '../../../../assets/images/news-image-2.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-23',
      category: 'filmes'
    },
    {
      id: 3,
      src: '../../../../assets/images/news-image-3.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-22',
      category: 'games'
    },
    {
      id: 4,
      src: '../../../../assets/images/news-image-4.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-15',
      category: 'series'
    },
    {
      id: 5,
      src: '../../../../assets/images/news-image-5.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-10',
      category: 'filmes'
    },
    {
      id: 6,
      src: '../../../../assets/images/news-image-1.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-07-03',
      category: 'animes'
    },
    {
      id: 7,
      src: '../../../../assets/images/news-image-2.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-06-30',
      category: 'filmes'
    },
    {
      id: 8,
      src: '../../../../assets/images/news-image-3.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-06-25',
      category: 'games'
    },
    {
      id: 9,
      src: '../../../../assets/images/news-image-4.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-06-13',
      category: 'series'
    },
    {
      id: 10,
      src: '../../../../assets/images/news-image-5.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-06-05',
      category: 'filmes'
    },
    {
      id: 11,
      src: '../../../../assets/images/news-image-1.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-04-23',
      category: 'animes'
    },
    {
      id: 12,
      src: '../../../../assets/images/news-image-2.svg',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.t',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...',
      date: '2022-03-15',
      category: 'filmes'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClickPages(id: number) {
    this.newsletter.map(news => {
      if( news.id ===id){
        this.router.navigate([`/${news.category}`])
      }
    })
  }

}
