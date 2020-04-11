import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { FavMoviesComponent } from './movies/fav_movies/fav-movies.component';
import { Error404Component } from './errors/404-error.component';
import { MovieRouteActivator } from './movies/movie-route-activator.service';
import { MovieListResolver } from './movies/movie-list.resolver';
import { MovieResolver } from './movies/shared/movie-resolver.service';



export  const appRoutes: Routes = [
{
    path: 'home', component: MoviesListComponent,
     resolve: { home : MovieListResolver }
},
{
    path: 'movie/:objectId', component: MovieDetailsComponent,
    canActivate : [MovieRouteActivator],
    resolve : { movie : MovieResolver}
},
{
    path: 'myFav', component: FavMoviesComponent
},
{path: '404', component: Error404Component },
{
    path: '', redirectTo: '/home', pathMatch: 'full'
 },
 {
    path: '**', redirectTo: '/home', pathMatch: 'full'
 }

];
