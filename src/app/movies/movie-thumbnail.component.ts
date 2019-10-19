import { Component, Input, Output } from '@angular/core';

@Component({
     selector: 'movie-thumbnail',
     template: `
          <div class = "row wrapper">
              <img [src] = " movie?.image?.url" />
                <h2> Title : {{ movie?.title | uppercase}} </h2>
               <h3> Year of Production : {{ movie?.releaseYear}} </h3>
               <button class="btn btn-default" name="details-button"
                   [routerLink]="['/movies', movie.objectId]"> See details</button>
              <hr/>
          </div> `,
     styles: [ `
             div.wrapper {
                border-radius: 10px;
                background-color: grey;
             }

             img {
                 width:  150px;
                 height: auto;
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
