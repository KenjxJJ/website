import { CanActivate, ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from './shared/movies.service';
import { Injectable } from '@angular/core';

@Injectable()


export class MovieRouteActivator implements CanActivate{

  constructor( private moviesService: MoviesService,
               private router: Router ) {
 }

  //Activate route on empty or unknown routed parameter to return to 404 Error Component
canActivate(route: ActivatedRouteSnapshot) {
  const movieExits = !!this.moviesService.getMovie(route.params['objectId'])

  if (!movieExits) {
      this.router.navigate(['/404']);
  }
  return movieExits;
}

}
