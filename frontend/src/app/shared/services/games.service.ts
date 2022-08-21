import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.modal';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseUrl: string = "http://localhost:3001";

  options = {
    headers: {
      'content-type': 'application/json'
    }
  };

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get<Array<Categorie>>(this.baseUrl + "/games")
  }

  getById(id: number) {
    return this.http.get<Categorie>(this.baseUrl + `/games/${id}`, this.options);
  }

  createNewPost(categorie: any) {
    return this.http.post(this.baseUrl + '/games', categorie, this.options);
  }

  remove(id: number) {
    return this.http.delete(this.baseUrl + '/games/' + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any) {
    return this.http.put<Categorie>(this.baseUrl + '/games/' + categorie.id, categorieEdit, this.options);
  }
}
