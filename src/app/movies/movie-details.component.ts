import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from './shared/movies.service';
import { IMovies } from './shared/movies.model';
import {  ActivatedRoute } from '@angular/router';

@Component({
      templateUrl: './movie-details.component.html',
      styles : [`
        img [src] {
            float: right;
        }
        .container {
            background-color : black;
            color : white;
        }
         `]
})

export class MovieDetailsComponent implements OnInit{
  movie:IMovies;
  genres: any[] = [];

  constructor( private moviesService: MoviesService, private route:ActivatedRoute){}

    ngOnInit() {
      this.movie = this.moviesService.getMovie(this.route.snapshot.params['objectId']);
      this.genres = this.moviesService.getMovieGenre(this.movie.objectId);

    }

}
