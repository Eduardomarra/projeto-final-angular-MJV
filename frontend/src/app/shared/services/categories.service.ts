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

  getcategories(categories: string) {
    return this.http.get<Array<Categorie>>(this.baseUrl + categories)
  }

  getById(id: number, categories: string){
    return this.http.get<Categorie>(this.baseUrl + `/${categories}/${id}`, this.options);
  }

  createNewPost(categorie: any, categories: string) {
    return this.http.post(this.baseUrl + `/${categories}`, categorie, this.options);
  }

  remove(id: number, categories: string) {
    return this.http.delete(this.baseUrl + categories + id, this.options);
  }

  update(categorie: Partial<Categorie>, categorieEdit: any, categories: string) {
    return this.http.put<Categorie>(this.baseUrl + categories + categorie.id, categorieEdit, this.options);
  }
}
