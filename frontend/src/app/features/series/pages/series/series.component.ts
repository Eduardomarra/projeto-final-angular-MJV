import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { SeriesService } from 'src/app/shared/services/series.service';

@Component({
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  title = 'Séries';
  description = 'O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados.'

  series: Categorie[] = []

  constructor(
    private seriesService: SeriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((serie) => {
      this.series = serie;
    });
  }

  detalhesSerie(idSerie: number) {
    this.router.navigateByUrl(`series-details/${idSerie}`);
  }

}
