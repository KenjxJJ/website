import { Component } from "@angular/core";
import { IMovies } from '../movies/shared/movies.model';
import { MoviesService } from '../movies/shared/movies.service';

@Component({
      selector: 'nav-bar',
      templateUrl: './nav-bar.component.html',
      styles: [`
          .navbar-nav{
            flex-direction : unset;
                     }

             .navbar-nav li {
                margin-right : 10px;
              color : green;
            }
            button {
               color :white;
               background-color: orange;
               height: 20%;
            }
            : hover {
               color : blue;
            }
      `]})

export class NavBarComponent {
        searchTerm : string = '';
        foundMovies: IMovies[] = [];

        constructor(private moviesService: MoviesService) {}

        searchMovies(searchTerm) {
          this.foundMovies = this.moviesService.searchMovies(searchTerm);

        }

}
