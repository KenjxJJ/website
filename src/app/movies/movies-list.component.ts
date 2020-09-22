import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { SessionStorageFavouritesService } from './shared/session-storage-favourites.service';
import { FavMovieService } from './fav_movies/fav-movies.service';

@Component({
    selector: 'movies-list',
     template: `<div class="movie_list container">
      <div class="landing">
       <div class="text">
      <h1><span id="year">20</span><span id="colorise">20</span></h1>
      <p> Looking for a clip that makes one laugh, shed tears or in search of the imaginative world, this is an extraordinary checklist of movies one doesn't dare miss! </p>
      </div>
      </div>

     <div class="display_movies">
      <!-- Iterate through an array of objects to list one movie as a thumbnail -->
        <movie-thumbnail *ngFor="let movie of movies"
           [movieSelection]="movie"></movie-thumbnail>
      </div>
    </div>

    <footer>

    <p class="title">My Netflix</p>
    <p>
      Copyright &copy;2019-2020 M-NetFlix Demo Site. Developed by Joel - Andela ALC 4.0 Project <a href="https://www.github.com/KenjxJJ">(KenjxJJ)</a>
      </p>
    </footer>
    `,
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

                    //compare items from session storage with items from the favMoviesList Array.
                    //and the movies based on id into the favMoviesList Array in the favMoviesService

                    this.favMoviesService.showFavMoviesList().filter(
                       s => s.objectId !== sessionsStored[key].objectId)) {
                        this.favMoviesService.addFavMovie(sessionsStored[key].objectId);

                    }
                }
             }


   }
}
