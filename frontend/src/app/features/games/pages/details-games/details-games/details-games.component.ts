import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  templateUrl: './details-games.component.html',
  styleUrls: ['./details-games.component.scss']
})
export class DetailsGamesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;

  formGames = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('', [Validators.required]),
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['gameId']);
      this.gamesService.getById(id).subscribe((game) => {
        this.categorie = game;
      });
    });
  }

  saveEdit(idGame: number) {
    this.gamesService.update({ id: idGame }, this.formGames.value).subscribe((res) => {
      alert('Game alterado com sucesso!');
      this.router.navigate(['/games']);
    });
  }

  delete(idGame: number) {
    this.gamesService.remove(idGame).subscribe((res) => {
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
