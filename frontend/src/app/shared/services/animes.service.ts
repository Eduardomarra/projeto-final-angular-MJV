import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.modal';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {
  baseUrl: string = "http://localhost:3001";

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getAnime() {
    return this.http.get<Array<Categorie>>(this.baseUrl + "/animes")
  }

  getById(id: number) {
    return this.http.get<Categorie>(this.baseUrl + `/animes/${id}`, this.options);
  }

  createNewPost(categorie: any) {
    return this.http.post(this.baseUrl + '/animes', categorie, this.options);
  }

  remove(id: number) {
    return this.http.delete(this.baseUrl + '/animes/' + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any) {
    return this.http.put<Categorie>(this.baseUrl + '/animes/' + categorie.id, categorieEdit, this.options);
  }
}
