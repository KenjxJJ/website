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
      <!-- Iterate through an array of objects to list one movie as a thumbnail -->
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

      //Implement retrieval from sessions storage to persist any likes of the movies selected
        const sessionsStored = this.sessionsStorageService.retrieveFromSessionStorage() || 0;
        if ( sessionsStored.length > 0) {

            for (const key of Object.keys(sessionsStored)) {
                  if ( 
                    
                    //compare items from session storage with items from the favMoviesServiceList.
                    
                    this.favMoviesService.showFavMoviesList().filter(
                       s => s.objectId !== sessionsStored[key].objectId)) {
                        this.favMoviesService.addFavMovie(sessionsStored[key].objectId);

                    }
                }
             }


   }
}
