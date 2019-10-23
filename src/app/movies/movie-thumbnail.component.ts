import { Component, Input} from '@angular/core';
import { IMovies, IMoviesCountFavourite } from './shared/movies.model';
import { FavMovieService } from './fav_movies/fav-movies.service';

@Component({
     selector: 'movie-thumbnail',
     template: `
          <div class = "wrapper row">
             <div class="col-md-9">
              <img [src] = "movie?.image?.url" />
                <h2> Title : {{ movie?.title | uppercase}} </h2>
               <h3> Year of Production : {{ movie?.releaseYear}} </h3>
               <button class="btn btn-default col-md-3" name="details-button"
                   [routerLink]="['/movies', movie.objectId]" > See details</button>
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
                 width: 800px;
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
                 font-size: 95%;
                 width: 20%;
                 background-color:rgba(81,200,20,0.9);
                 color: white;
             }
             `]
})

export class MovieThumbnailComponent {
  // tslint:disable-next-line: no-input-rename
  @Input(' movieSelection')  movie: IMovies;
  likeCount: IMoviesCountFavourite[] =[];

  constructor(private favMoviesService: FavMovieService){
 }

    toggleLike(id: string): void {
      console.log(this.likeCount);
      if (this.userHasLiked(id)){
          this.favMoviesService.removeAFavMovie(id);
          console.log(this.favMoviesService.showFavMoviesList);
     } else {
         this.favMoviesService.addFavMovie(id);
     }
    }
  userHasLiked(id: string) {
      return this.favMoviesService.userHasLiked(id);
  }

}
