import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false

  formFilme = new FormGroup({
    description: new FormControl("", [Validators.required]),
    src: new FormControl("",[Validators.required])
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['filmeId']);
      this.categoriesService.getById(id).subscribe((filme) => {
        this.categorie = filme;
      });
    });
  }

  saveEdit(idFilme: number) {
    this.categoriesService.update({id: idFilme}, this.formFilme.value).subscribe((res) => {
      alert('Filme alterado com sucesso!');
      this.router.navigate(['/filmes']);
    })
  }

  delete( idFilme: number ) {
    this.categoriesService.remove(idFilme).subscribe((res) => {
      alert('Filme removido com sucesso!');
      this.router.navigate(['/filmes']);
    }
    );
  }

  editFilme(id: number, description: string, src: string) {
    this.isEdit = true;
    this.formFilme.controls['description'].setValue(description);
    this.formFilme.controls['src'].setValue(src);
  }



}
