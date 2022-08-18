import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {

  title = 'Filmes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  filmes: Array<Categorie> = []

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.categoriesService.getFilmes().subscribe((filmes) => {
      this.filmes = filmes;
    })
  }

  detalhesFilme(idFilme: number) {
    this.router.navigateByUrl(`filmes-details/${idFilme}`);
  }
}
