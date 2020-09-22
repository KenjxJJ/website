import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { IMovies } from '../shared/movies.model';
import { ActivatedRoute } from '@angular/router';
import { FavMovieService } from './fav-movies.service';

@Component({
  selector: 'myfav',
  templateUrl: './fav-movies.component.html',
  styles: [`
      .container {
          background-color: rgba(27,27,27, .43);
          color: white;
          height:100vh;
          width: 100%;
          height: auto;
          overflow:hidden;
        }
        .favourite{
          padding: 1.3rem 1.1rem;
        border-bottom: 1px solid #565655;
        }
        img {
           width: 100%;
        }

     button {
      background-color: rgba(200, 67, 20, 0.7);
      color: white;
      margin: .56rem;
      padding: .3rem .5rem  ;
      height: 20%;
      border-radius: 0px;
      min-width: 100px;
     }
     button:hover, button:focus{
         background-color: red;
         color: #ffc;
     }


   `]
})

export class FavMoviesComponent implements OnInit {
  myFavMoviesList: IMovies[];
  clickedMovie: IMovies;
  id: string;
  genres: any[][];

  constructor(private moviesService: MoviesService, private route: ActivatedRoute
    , private favMoviesService: FavMovieService) { }

  ngOnInit() {

    this.id = this.route.params['objectId'];
    this.myFavMoviesList = this.favMoviesService.showFavMoviesList();
    this.genres = this.moviesService.getMovieGenre(this.id);
  }

  removeFromFav(id) {
    this.myFavMoviesList = this.favMoviesService.removeAFavMovie(id);
  }
}
