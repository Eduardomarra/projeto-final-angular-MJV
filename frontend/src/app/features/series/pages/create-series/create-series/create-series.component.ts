import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  templateUrl: './create-series.component.html',
  styleUrls: ['./create-series.component.scss']
})
export class CreateSeriesComponent implements OnInit {

  formSeries = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('',[Validators.required])
  });

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.formSeries.value;

    this.categoriesService.createNewPost(formValue, "series").subscribe((res) => {
      this.router.navigate(['/series'])
    })
  }
}
