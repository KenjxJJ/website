import { Routes }  from '@angular/router';
import { MoviesListComponent } from './movies/movies-list.component';




export  const appRoutes: Routes =[
{
    path: 'home', component: MoviesListComponent,
},
{
    path: '', redirectTo: '/home', pathMatch: 'full'
 }
];
