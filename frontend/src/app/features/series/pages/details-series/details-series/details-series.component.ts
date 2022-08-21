import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { SeriesService } from 'src/app/shared/services/series.service';

@Component({
  templateUrl: './details-series.component.html',
  styleUrls: ['./details-series.component.scss']
})
export class DetailsSeriesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;

  formSerie = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('', [Validators.required]),
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private seriesService: SeriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['serieId']);
      this.seriesService.getById(id).subscribe((serie) => {
        this.categorie = serie;
      });
    });
  }

  saveEdit(idSerie: number) {
    this.seriesService
      .update({ id: idSerie }, this.formSerie.value)
      .subscribe((res) => {
        alert('Serie alterado com sucesso!');
        this.router.navigate(['/series']);
      });
  }

  delete(idSerie: number) {
    this.seriesService.remove(idSerie).subscribe((res) => {
      alert('Serie removido com sucesso!');
      this.router.navigate(['/series']);
    });
  }

  editFilme(description: string, src: string) {
    this.isEdit = true;
    this.formSerie.controls['description'].setValue(description);
    this.formSerie.controls['src'].setValue(src);
  }

}
