import { Component } from '@angular/core';
import { IMovies } from '../movies/shared/movies.model';
import { MoviesService } from '../movies/shared/movies.service';

@Component({
      selector: 'nav-bar',
      templateUrl: './nav-bar.component.html',
      styleUrls: ['nav-bar.component.css']
    })

export class NavBarComponent {
        searchTerm = '';
        foundMovies: IMovies[] = [];

        constructor(private moviesService: MoviesService) {}

        //function searchMovies() that use an objectId to search possible movies with a string of atleast one length
        searchMovies(searchTerm) {
          this.foundMovies = this.moviesService.searchMovies(searchTerm);

        }

}
