import { Component } from '@angular/core';
import { IMovies } from '../movies/shared/movies.model';
import { MoviesService } from '../movies/shared/movies.service';

@Component({
      selector: 'nav-bar',
      templateUrl: './nav-bar.component.html',
      styles: [`
          .navbar-nav{
            flex-direction : unset;
            width: 100%;
            }

            ul li {
              float : left;
               margin-right : 10px;
               color : blue;
               text-align: center;
               padding: 15px;
            }
             a: hover,
             a: link {
              text-decoration : none;
             }
            li > a.active{
                  color: #F97924;
                  text-decoration : none;

            }

            form > input {
                width: 55%;
                float:left;
                margin-right: 0px;
                min-width: 150px;
            }

            button {
               color :white;
               background-color: orange;
               height: 20%;
               width: 25%;
               min-width: 80px;
            }
            :hover {
               color : blue;
            }
      `]})

export class NavBarComponent {
        searchTerm = '';
        foundMovies: IMovies[] = [];

        constructor(private moviesService: MoviesService) {}

        searchMovies(searchTerm) {
          this.foundMovies = this.moviesService.searchMovies(searchTerm);

        }

}
