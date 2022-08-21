import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/shared/model/categorie.modal';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  templateUrl: './details-animes.component.html',
  styleUrls: ['./details-animes.component.scss'],
})
export class DetailsAnimesComponent implements OnInit {

  categorie?: Categorie;
  isEdit = false;

  formAnimes = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('', [Validators.required]),
  });

  constructor(
    private activedRoute: ActivatedRoute,
    private animesService: AnimesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['animeId']);
      this.animesService.getById(id).subscribe((anime) => {
        this.categorie = anime;
      });
    });
  }

  saveEdit(idAnime: number) {
    this.animesService
      .update({ id: idAnime }, this.formAnimes.value)
      .subscribe((res) => {
        alert('Anime alterado com sucesso!');
        this.router.navigate(['/animes']);
      });
  }

  delete(idAnime: number) {
    this.animesService.remove(idAnime).subscribe((res) => {
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
