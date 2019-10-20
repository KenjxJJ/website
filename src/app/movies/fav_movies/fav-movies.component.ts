import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { IMovies } from '../shared/movies.model';
import { ActivatedRoute } from '@angular/router';
import { FavMovieService } from './fav-movies.service';

@Component({
      selector: 'myfav',
     templateUrl: './fav-movies.component.html',
     styles: [`div{
          background-color: black;
          color: grey;
          border: 1px solid white;
          width: 78%;
          height: auto;
     }`]
})

export class FavMoviesComponent implements OnInit {

    myFavMoviesList: IMovies[];
    clickedMovie: IMovies;
    id: string;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute
          ,     private favMoviesService: FavMovieService) {}

   ngOnInit() {
       this.clickedMovie = this.moviesService.getMovie(this.route.params['objectId']);
       this.id = this.route.params['objectId'];
       this.myFavMoviesList =  this.favMoviesService.showFavMoviesList();
   }

   removeFromFav(id) {
      this.myFavMoviesList = this.favMoviesService.removeAFavMovie(id);
  }
   }
