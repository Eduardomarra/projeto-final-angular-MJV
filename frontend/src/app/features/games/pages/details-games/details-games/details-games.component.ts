import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { User } from 'src/app/shared/model/user.model';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-games.component.html',
  styleUrls: ['./details-games.component.scss']
})
export class DetailsGamesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;
  user?: User

  formGames = new FormGroup({
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
      const id = parseInt(params['gameId']);
      this.categoriesService.getById(id, "games").subscribe((game) => {
        this.categorie = game;
      });
    });

    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage){
      this.user = JSON.parse(userSessionStorage);
    }
  }

  saveEdit(idGame: number) {
    this.categoriesService.update({ id: idGame}, this.formGames.value, "/games/").subscribe((res) => {
      alert('Game alterado com sucesso!');
      this.router.navigate(['/games']);
    });
  }

  delete(idGame: number) {
    this.categoriesService.remove(idGame, "/games/").subscribe((res) => {
      alert('Game removido com sucesso!');
      this.router.navigate(['/games']);
    });
  }

  editFilme(description: string, src: string) {
    this.isEdit = true;
    this.formGames.controls['description'].setValue(description);
    this.formGames.controls['src'].setValue(src);
  }
}
