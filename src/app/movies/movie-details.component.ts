import { Component, OnInit} from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { IMovies } from './shared/movies.model';
import {  ActivatedRoute } from '@angular/router';
import { FavMovieService } from './fav_movies/fav-movies.service';

@Component({
      templateUrl: './movie-details.component.html',
      styles : [`
      * {
        box-sizing: unset;
       }
         .container {
            background-color : rgb(67,67,67);
            color : white;
            min-width: 600px;
            width: 100%;
        }

        ul li{
           padding-left: -7px;

        }
        button.btn {
           background-color: rgba(177, 67, 20, 0.7);
           color: white;
           margin: 2px;
           font-size: 12px;
           height: 20px;
        }
         div {
            float: left;
            padding-right: 10px;
         }
        @media screen and ( max-width: 600px ) {
            img {
             width:100%;
             float: left:
             margin-right: 10px;
           }
        }
        @media screen and (min-width: 601px){
          img {
            width:90%;
            float: left:
            margin-right: 10px;
          }
        }
         `]
})

export class MovieDetailsComponent implements OnInit {

  movie: IMovies;
  myFavMoviesList: IMovies[];
  id: string;

  constructor( private moviesService: MoviesService, private route: ActivatedRoute,
    private favMoviesService: FavMovieService) {}

    ngOnInit() {
      this.movie = this.moviesService.getMovie(this.route.snapshot.params.objectId);
      this.id = this.route.snapshot.params['objectId'];


    }
    addToMyFav() {
     this.favMoviesService.addFavMovie(this.id);
    }
}
