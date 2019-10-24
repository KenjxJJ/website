import { MoviesService } from './movies.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieResolver implements Resolve<any> {
  constructor(private moviesService: MoviesService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.moviesService.getMovie(route.params['objectId']);
  }
}
