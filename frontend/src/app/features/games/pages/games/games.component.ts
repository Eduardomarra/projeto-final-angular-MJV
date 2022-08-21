import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  title = 'Games';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  games: Categorie[] = [];

  constructor(
    private gamesService: GamesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe((game) => {
      this.games = game;
    });
  }

  detalhesGames(idGame: number) {
    this.router.navigateByUrl(`game-details/${idGame}`);
  }

}
