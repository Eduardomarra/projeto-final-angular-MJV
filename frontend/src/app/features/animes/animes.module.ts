import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './pages/animes/animes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';
import { FeaturesModule } from '../features.module';


@NgModule({
  declarations: [
    AnimesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesModule
  ]
})
export class AnimesModule { }
