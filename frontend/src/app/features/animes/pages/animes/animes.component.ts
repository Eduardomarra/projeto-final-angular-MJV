import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';

@Component({
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  title = 'Animes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  animes: Categorie[] = []
  user?: User

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoriesService.getcategories("/animes").subscribe((anime) => {
      this.animes = anime;
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
}

  detalhesAnime(idAnime: number) {
    this.router.navigateByUrl(`animes-details/${idAnime}`)
  }
}
