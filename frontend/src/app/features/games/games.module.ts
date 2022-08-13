import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './pages/games/games.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GamesModule { }
