import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Newsletter } from 'src/app/shared/model/newsletter.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { NewsletterService } from 'src/app/shared/services/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  newsletter: Array<Newsletter> = [];

  constructor(
    private router: Router,
    private newsletterService: NewsletterService
    ) { }

  ngOnInit(): void {
    this.newsletterService.getNewsletter().subscribe((news) => {
      this.newsletter = news;
    });
  }

  handleClickPages(id: number) {
    this.newsletter.map(news => {
      if( news.id ===id){
        this.router.navigate([`/${news.category}`])
      }
    })
  }

}
