import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.modal';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  baseUrl: string = "http://localhost:3001";

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getSeries() {
    return this.http.get<Array<Categorie>>(this.baseUrl + "/series")
  }

  getById(id: number) {
    return this.http.get<Categorie>(this.baseUrl + `/series/${id}`, this.options);
  }

  createNewPost(categorie: any) {
    return this.http.post(this.baseUrl + '/series', categorie, this.options);
  }

  remove(id: number) {
    return this.http.delete(this.baseUrl + '/series/' + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any) {
    return this.http.put<Categorie>(this.baseUrl + '/series/' + categorie.id, categorieEdit, this.options);
  }
}
