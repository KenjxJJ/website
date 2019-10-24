import { Resolve} from '@angular/router';
import { MoviesService } from './shared/movies.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieListResolver implements Resolve<any>{
      constructor(private movieService: MoviesService){}

      resolve(){
           return this.movieService.getMovies();
      }
}
