import { Component, Input } from '@angular/core';
import { IMovies } from './shared/movies.model';
import { FavMovieService } from './fav_movies/fav-movies.service';
import { SessionStorageFavouritesService } from './shared/session-storage-favourites.service';

@Component({
  selector: 'movie-thumbnail',
  template: `
          <div class = "wrapper">
             <div class="show_movie">
              <img [src] = "movie?.image?.url"/>
                <h2 class="title"> {{ movie?.title | uppercase}} </h2>
               <h3> Production Year : {{ movie?.releaseYear}} </h3>
               <button class="btn btn-default" name="details-button"
                   [routerLink]="['/movie', movie.objectId]" >Details</button>
            </div>
            <movie-like class="movieLike" (like)='toggleLike(movie.objectId)'
                          [liked]='userHasLiked(movie.objectId)'>
            </movie-like>
          </div>`
  ,
  styles: [`
             .wrapper {
               width: 54vw;
               min-width: 270px;
               height: 591px;
               border-radius: 4%;
               margin-left: 5px;
               display: flex;
               flex: 1 1 80%;
              flex-flow: row wrap;
              background: linear-gradient(0deg, #262626 0%, #262626 5%, #fff 97%, #262626 100%);
            }

            .wrapper > * {
              flex: 1 1 100%;
              width: 100%;
              text-align: center;
             }

             img[src] {
                min-height: 45vh;
                width:100%;
                max-width: 320px;
             }

             h2{
                color: #ffdad4;
                font-size: 1.42rem;
                height: 9vh;
             }
             h3 {
                 color: #fff;
                 font-size: 1.1rem;
                 margin-top: 1.4rem;
            }
             button {
                 font-size: 85%;
                 width: 30%;
                 margin-top: 1.4rem;
                 max-width: 80px;
                 border-radius: 6px;
                 padding: .45rem .9rem;
                 background-color:  #1fa9ff;
                 color: white;
             }
             button:hover, button:focus{
                color: #fff;
                cursor: pointer;
                background-color: #e82a0d;
             }
             .movieLike {
               display: flex;
                 align-items: flex-start;
                 justify-content: center;
                 margin: 0 auto;
            }
            @media all and (max-width: 320px){
              .wrapper > *{
                flex: 1 1 100%;
              }
            }
            @media all and (min-width: 587px){
              .wrapper {
                max-width: 301px;
              }
            }

             `]
})

export class MovieThumbnailComponent {
  // tslint:disable-next-line: no-input-rename
  @Input(' movieSelection') movie: IMovies;
  newValue: boolean;
  newFavList: IMovies[];

  constructor(private favMoviesService: FavMovieService,
    private sessionStorageService: SessionStorageFavouritesService) {
  }


  toggleLike(id: string): void {
    if (this.userHasLiked(id)) {
      this.newFavList = this.favMoviesService.removeAFavMovie(id);
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
