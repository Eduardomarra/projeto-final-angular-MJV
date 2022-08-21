import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  title = 'Animes';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  animes: Categorie[] = []

  constructor(
    private animesService: AnimesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animesService.getAnime().subscribe((anime) => {
      this.animes = anime;
    });
}

  detalhesAnime(idAnime: number) {
    this.router.navigateByUrl(`animes-details/${idAnime}`)
  }
}
