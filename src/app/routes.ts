import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { MovieResolver } from './movies/movie-list.resolver';



export  const appRoutes: Routes =[
{
    path: 'home', component: MoviesListComponent
},
{
    path: 'movies/:objectId', component: MovieDetailsComponent,
    resolve: { movie: MovieResolver}
},
{
    path: '', redirectTo: '/home', pathMatch: 'full'
 }
];
