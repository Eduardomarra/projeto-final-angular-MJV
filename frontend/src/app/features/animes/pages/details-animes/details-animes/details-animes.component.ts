import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-animes.component.html',
  styleUrls: ['./details-animes.component.scss'],
})
export class DetailsAnimesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;
  user?: User;

  formAnimes = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('', [Validators.required]),
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['animeId']);
      this.categoriesService.getById(id, "animes").subscribe((anime) => {
        this.categorie = anime;
      });
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  saveEdit(idAnime: number) {
    this.categoriesService.update({ id: idAnime }, this.formAnimes.value, "/animes/").subscribe((res) => {
        alert('Anime alterado com sucesso!');
        this.router.navigate(['/animes']);
      });
  }

  delete(idAnime: number) {
    this.categoriesService.remove(idAnime, "/animes/").subscribe((res) => {
      alert('Anime removido com sucesso!');
      this.router.navigate(['/animes']);
    });
  }

  editFilme(description: string, src: string) {
    this.isEdit = true;
    this.formAnimes.controls['description'].setValue(description);
    this.formAnimes.controls['src'].setValue(src);
  }
}
