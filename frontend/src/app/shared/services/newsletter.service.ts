import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Newsletter } from '../model/newsletter.modal';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  baseUrl: string = "http://localhost:3001/newsletter";

  news: Array<Newsletter> = []

  constructor(private http: HttpClient) { }

  getNewsletter() {
    return this.http.get<Array<Newsletter>>(this.baseUrl)
  }

  createNewsletter(newsletter: Newsletter) {
    return this.http.post(this.baseUrl, newsletter)
  }
}
