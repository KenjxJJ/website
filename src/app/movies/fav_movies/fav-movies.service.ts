import { Injectable } from '@angular/core';
import { IMovies } from '../shared/movies.model';
import { MoviesService } from '../shared/movies.service';

let myFavMoviesList: IMovies[] = [];
@Injectable()
export class FavMovieService {
  myFavMovie: IMovies;
  id: string;

  constructor(private moviesService: MoviesService) { }

  addFavMovie(id: string) {
    if(this.userHasLiked(id) === false){
    this.myFavMovie = this.moviesService.getMovie(id);
    myFavMoviesList.push(this.myFavMovie);
    }
    return;
  }
  showFavMoviesList(): IMovies[] {
    return myFavMoviesList;
  }

  removeAFavMovie(id: string): IMovies[] {
    myFavMoviesList = myFavMoviesList.filter(s => s.objectId !== id).map(s => s);
    return myFavMoviesList;
  }
  userHasLiked(id: string): boolean {
    return myFavMoviesList.some(like => like.objectId === id);
  }
}
