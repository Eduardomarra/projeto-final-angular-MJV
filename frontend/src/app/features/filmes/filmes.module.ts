import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './pages/filmes/filmes.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FilmesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FilmesModule { }
