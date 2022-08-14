import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimesComponent } from './features/animes/pages/animes/animes.component';
import { FilmesComponent } from './features/filmes/pages/filmes/filmes.component';
import { GamesComponent } from './features/games/pages/games/games.component';
import { HomeComponent } from './features/home/pages/home/home.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { SeriesComponent } from './features/series/pages/series/series.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'series', component: SeriesComponent, canActivate: [AuthGuard] },
  { path: 'filmes', component: FilmesComponent, canActivate: [AuthGuard] },
  { path: 'animes', component: AnimesComponent, canActivate: [AuthGuard] },
  { path: 'games', component: GamesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
