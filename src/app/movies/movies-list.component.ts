import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { SessionStorageFavouritesService } from './shared/session-storage-favourites.service';
import { FavMovieService } from './fav_movies/fav-movies.service';


@Component({
    selector: 'movies-list',
     template: `<div>
      <h1>Movies</h1>
     <hr>
     <div class="row">
        <movie-thumbnail class='row' *ngFor="let movie of movies"
           [movieSelection]="movie"></movie-thumbnail>
      </div>
    </div>`,
   styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
    movies: any[];
   constructor(private moviesService: MoviesService,
               private sessionsStorageService: SessionStorageFavouritesService,
               private favMoviesService: FavMovieService) { }

   ngOnInit() {
        this.movies = this.moviesService.getMovies();

        const sessionsStored = this.sessionsStorageService.retriveFromSessionStorage() || 0;
        if ( sessionsStored.length > 0) {
            console.log(sessionsStored.length);
            for (const key of Object.keys(sessionsStored)) {
                  if (
                    this.favMoviesService.showFavMoviesList().filter(
                       s => s.objectId !== sessionsStored[key].objectId)) {
                        console.log(this.favMoviesService.showFavMoviesList());
                        this.favMoviesService.addFavMovie(sessionsStored[key].objectId);
                        console.log(this.favMoviesService.showFavMoviesList());
                    }
                }
             }


   }
}
