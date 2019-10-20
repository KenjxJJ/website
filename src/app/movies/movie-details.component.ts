import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { IMovies } from './shared/movies.model';
import {  ActivatedRoute } from '@angular/router';

import { FavMovieService } from './fav_movies/fav-movies.service';

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

export class MovieDetailsComponent implements OnInit {

  movie: IMovies;
  genres: any[] = [];
  myFavMoviesList: IMovies[];
  //isClicked: Boolean = false;
  id: string;
  myFavMovie: IMovies;

  constructor( private moviesService: MoviesService, private route: ActivatedRoute, private favMoviesService: FavMovieService) {}

    ngOnInit() {
      this.movie = this.moviesService.getMovie(this.route.snapshot.params.objectId);
      this.id = this.route.snapshot.params['objectId'];
      this.genres = this.moviesService.getMovieGenre(this.movie.objectId);

    }
    addToMyFav() {
     this.favMoviesService.addFavMovie(this.id);
    }
}
