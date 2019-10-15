import { Component, Input } from '@angular/core';

@Component({
     selector: 'movie-thumbnail',
     template: `
              <div>
                  <h2> {{ movie.title}} </h2>
                <br>
                <h3> {{ movie?.releaseYear}}</h3>
                <hr>
            </div> `
})

export class MovieThumbnailComponent {
  // tslint:disable-next-line: no-input-rename
  @Input(' movieSelection')  movie:any;
}
