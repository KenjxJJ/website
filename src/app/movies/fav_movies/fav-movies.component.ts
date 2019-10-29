import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { IMovies } from '../shared/movies.model';
import { ActivatedRoute } from '@angular/router';
import { FavMovieService } from './fav-movies.service';

@Component({
      selector: 'myfav',
     templateUrl: './fav-movies.component.html',
     styles: [`
          h3, h4{
            font-size: 130%;
          }
        div {
          background-color: rgb(67,67,67);
          color: white;
          width: 100%;
          height: auto;
     }

     button.btn {
      background-color: rgba(200, 67, 20, 0.7);
      color: white;
      margin: 2px;
      font-size: 14px;
      height: 30px;

   }`]
})

export class FavMoviesComponent implements OnInit {

    myFavMoviesList: IMovies[];
    clickedMovie: IMovies;
    id: string;
    genres: any[][];

    constructor(private moviesService: MoviesService, private route: ActivatedRoute
          ,     private favMoviesService: FavMovieService) {}

   ngOnInit() {

       this.id = this.route.params['objectId'];
       this.myFavMoviesList =  this.favMoviesService.showFavMoviesList();
       this.genres = this.moviesService.getMovieGenre(this.id);
   }

   removeFromFav(id) {
      this.myFavMoviesList = this.favMoviesService.removeAFavMovie(id);
  }
   }
