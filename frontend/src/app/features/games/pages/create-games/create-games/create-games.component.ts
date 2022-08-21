import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { GamesService } from 'src/app/shared/services/games.service';

@Component({
  templateUrl: './create-games.component.html',
  styleUrls: ['./create-games.component.scss']
})
export class CreateGamesComponent implements OnInit {

  formGames = new FormGroup({
    description: new FormControl('', [Validators.required]),
    src: new FormControl('',[Validators.required])
  });

  constructor(
    private gamesService: GamesService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.formGames.value;

    this.gamesService.createNewPost(formValue).subscribe((res) => {
      this.router.navigate(['/games'])
    })
  }
}
