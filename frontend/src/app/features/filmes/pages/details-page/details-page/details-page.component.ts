import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  categorie?: Categorie

  constructor(
    private activedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['filmeId']);
      this.categoriesService.getById(id).subscribe((filme) => {
        this.categorie = filme;
      });
    });
  }

}
