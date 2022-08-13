import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './features/animes/pages/animes/animes.component';
import { FilmesComponent } from './features/filmes/pages/filmes/filmes.component';
import { GamesComponent } from './features/games/pages/games/games.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { SeriesComponent } from './features/series/pages/series/series.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'animes', component: AnimesComponent },
  { path: 'games', component: GamesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
