import { Component, Input } from '@angular/core';

@Component({
     selector: 'movie-thumbnail',
     template: `
              <div class = "row wrapper">
                  <h2>Title:{{ movie.title || uppercase}} </h2>
                <br>
                <h3> Release Year: {{ movie?.releaseYear}}</h3>
                <hr>
            </div> `

    ,
     styles: [ `
             div.wrapper {
                border-radius: 10px;
                background-color: grey;
             }

             h1, h2, h3 {
                 padding: inherit;
                 color: white;
                 margin-left: 40px;
                 
             }
             `]
})

export class MovieThumbnailComponent {
  // tslint:disable-next-line: no-input-rename
  @Input(' movieSelection')  movie: any;
}
