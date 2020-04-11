import { Component } from '@angular/core';
import { IMovies } from '../movies/shared/movies.model';
import { MoviesService } from '../movies/shared/movies.service';

@Component({
      selector: 'nav-bar',
      templateUrl: './nav-bar.component.html',
      styles: [`
            ul li {
              color : blue;
              text-align: center;
             }
             a: hover,
             a: link {
              text-decoration : none;
             }
            li > a.active{
                  color: #F97924;
                  text-decoration : none;

            }
            li {
              display: inline-block;
              padding: 0 5px 0 5px;
              float: left;
            }

            form > input {
                width: 55%;
                float:left;
                margin-right: 0px;
                min-width: 150px;
            }
            form {
              margin: 5px auto;
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

            @media all and (min-width: 400px){

              li {
                display: inline;
              }
            }
      `]})

export class NavBarComponent {
        searchTerm = '';
        foundMovies: IMovies[] = [];

        constructor(private moviesService: MoviesService) {}

        //function searchMovies() that use an objectId to search possible movies with a string of atleast one length
        searchMovies(searchTerm) {
          this.foundMovies = this.moviesService.searchMovies(searchTerm);

        }

}
