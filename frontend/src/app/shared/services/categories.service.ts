import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.modal';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl: string = "http://localhost:3001";

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getFilmes() {
    return this.http.get<Array<Categorie>>(this.baseUrl + "/filmes")
  }

  getById(id: number) {
    return this.http.get<Categorie>(this.baseUrl + `/filmes/${id}`, this.options);
  }

  createNewPost(categorie: any) {
    return this.http.post(this.baseUrl + '/filmes', categorie, this.options);
  }

  remove(id: number) {
    return this.http.delete(this.baseUrl + '/filmes/' + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any) {
    return this.http.put<Categorie>(this.baseUrl + '/filmes/' + categorie.id, categorieEdit, this.options);
  }
}
