import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from './shared/movies.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieResolver implements Resolve<any>{
      constructor(private movieService: MoviesService){}

      resolve(route: ActivatedRouteSnapshot){
           return this.movieService.getMovie(route.params.objectId);
      }
}
