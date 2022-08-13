import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './pages/series/series.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SeriesModule { }
