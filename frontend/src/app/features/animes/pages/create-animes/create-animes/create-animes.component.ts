import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimesService } from 'src/app/shared/services/animes.service';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './create-animes.component.html',
  styleUrls: ['./create-animes.component.scss']
})
export class CreateAnimesComponent implements OnInit {

  formAnime = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('',[Validators.required])
  });

  constructor(
    private animesService: AnimesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.formAnime.value;

    this.animesService.createNewPost(formValue).subscribe((res) => {
      this.router.navigate(['/animes'])
    })
  }
}
