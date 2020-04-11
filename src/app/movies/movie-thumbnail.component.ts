import { Component, Input } from '@angular/core';
import { IMovies} from './shared/movies.model';
import { FavMovieService } from './fav_movies/fav-movies.service';
import { SessionStorageFavouritesService } from './shared/session-storage-favourites.service';

@Component({
     selector: 'movie-thumbnail',
     template: `
          <div class = "wrapper row">
             <div class="col-md-9">
              <img [src] = "movie?.image?.url" class="col-sm-12" />
                <h2> Title : {{ movie?.title | uppercase}} </h2>
               <h3> Year of Production : {{ movie?.releaseYear}} </h3>
               <button class="btn btn-default col-md-3" name="details-button"
                   [routerLink]="['/movie', movie.objectId]" > See details</button>
            </div>
            <movie-like class="col-md-1" (like)='toggleLike(movie.objectId)'
                          [liked]='userHasLiked(movie.objectId)'>
            </movie-like>
                   <hr/>
          </div>`
          ,
     styles: [ `
             div.wrapper {
                border-radius: 5px;
                 margin: 0px 5px;
                 background-color: rgba(60,60,60,0.3);
                 max-width: 800px;
                 width:100%;
              }

             img[src] {
                float: left;
                width: 55%;
                height: 55;
                margin-right: 5px;
             }

             h2, h3 {
                 padding: inherit;
                 color: white;
                 margin-left: 40px;
                 font-size: 22px;
             }
             button {
                 font-size: 85%;
                 width: 20%;
                 background-color:rgba(81,200,20,0.9);
                 color: white;
             }
             `]
})

export class MovieThumbnailComponent {
  // tslint:disable-next-line: no-input-rename
  @Input(' movieSelection')  movie: IMovies;
  newValue: boolean;
  newFavList: IMovies[];

  constructor(private favMoviesService: FavMovieService,
              private sessionStorageService: SessionStorageFavouritesService) {
 }


 toggleLike(id: string): void {
      if (this.userHasLiked(id)) {
          this. newFavList = this.favMoviesService.removeAFavMovie(id);
          this.sessionStorageService.clearAnItemFromSessionStorage(id);

     } else {
         this.favMoviesService.addFavMovie(id);
         this.sessionStorageService.storeOnSessionStorage(id, JSON.stringify(this.userHasLiked(id)));
     }
    }
  userHasLiked(id: string) {
      return this.favMoviesService.userHasLiked(id);
  }
}
