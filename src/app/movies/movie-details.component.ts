import { Component, OnInit} from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { IMovies } from './shared/movies.model';
import {  ActivatedRoute, Params } from '@angular/router';
import { FavMovieService } from './fav_movies/fav-movies.service';

@Component({
      templateUrl: './movie-details.component.html',
      styles : [`
        .container {
            color : white;
            padding : 1.3rem 1.1rem;
            font-size: 0.97rem;
            overflow: hidden;
        }

        button.btn {
           background-color: orangered;
           color: white;
           margin: .4rem .65rem;
           padding: .35rem .7rem;
           font-size: 0.89rem;
           width: 120px;
        }
        @media ( max-width: 450px){
          .container{
            text-align:center;
          }
          img {
            width:100%;
            display:block;
            margin: auto;
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
      this.route.params.forEach( (params: Params) => {
      this.movie = this.moviesService.getMovie(params.objectId);
      this.id = this.route.snapshot.params.objectId;
      });
    }
  // click to add to favourite
    addToMyFav() {
     this.favMoviesService.addFavMovie(this.id);
    }
  // function to check the state of the particular movie if it is liked.
  // Checks if the particular movie is in the list of the favourites.
    userHasClicked(id) {
      this.favMoviesService.userHasLiked(id);
    }
}
