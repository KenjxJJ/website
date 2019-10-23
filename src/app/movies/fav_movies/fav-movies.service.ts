import { Injectable } from '@angular/core';
import { IMovies} from '../shared/movies.model';
import { MoviesService } from '../shared/movies.service';

@Injectable()
export class  FavMovieService {
  myFavMovie: IMovies;
  id: string;

  constructor( private moviesService: MoviesService) {}

addFavMovie(id: string) {
    this.myFavMovie = this.moviesService.getMovie(id);
    // tslint:disable-next-line: no-use-before-declare
    myFavMoviesList.push(this.myFavMovie);
    // tslint:disable-next-line: no-use-before-declare
    console.log(myFavMoviesList);
    // tslint:disable-next-line: no-use-before-declare
    }
showFavMoviesList(): IMovies[] {
        // tslint:disable-next-line: no-use-before-declare
        return myFavMoviesList;
    }

    removeAFavMovie(id: string): IMovies[]{
          // tslint:disable-next-line: no-use-before-declare
          myFavMoviesList = myFavMoviesList.filter(s => s.objectId !== id).map( s => s);
        return myFavMoviesList;
}
userHasLiked(id: string): boolean {
          return myFavMoviesList.some(like => like.objectId === id );
      }
 }
let  myFavMoviesList: IMovies[] = [];
