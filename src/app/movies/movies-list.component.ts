import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';

@Component({
    selector: 'movies-list',
     template: `<div>
      <h1>Movies</h1>
     <hr>
     <div class="row">
         <movie-thumbnail *ngFor="let movie of movies"
             [movieSelection]="movie"></movie-thumbnail>
             </div>
        </div>`,
     styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
     movies: any[];
    constructor(private moviesService: MoviesService) {

    }

    ngOnInit() {
         this.movies = this.moviesService.getMovies();
    }
}
