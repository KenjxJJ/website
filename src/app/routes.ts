import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { MovieResolver } from './movies/movie-list.resolver';
import { FavMoviesComponent } from './movies/fav_movies/fav-movies.component';
import { Error404Component } from './errors/404-error.component';
import { MovieRouteActivator } from './movies/movie-route-activator.service';



export  const appRoutes: Routes = [
{
    path: 'home', component: MoviesListComponent
},
{
    path: 'movies/:objectId', component: MovieDetailsComponent,
    canActivate : [MovieRouteActivator]
},
{
    path: 'myFav', component: FavMoviesComponent
},
{path: '404', component: Error404Component },
{
    path: '', redirectTo: '/home', pathMatch: 'full'
 }
];
