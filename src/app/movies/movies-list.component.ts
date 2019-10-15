import { Component } from '@angular/core';

@Component({
    selector: 'movies-list',
     template: `<div>
     <h1>Movies List here
     </h1>
     <hr>
     <div class="row">
         <movie-thumbnail *ngFor="let movieList of moviesList"
             [movieSelection]="movieList"></movie-thumbnail>
             </div>
        </div>`,
     styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent {
       moviesList = [
        {
          objectId : 'n4mV28e42t',
         image : {
            __type: 'File',
            name: 'c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg',
            url: 'https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg'
        },
        createdAt: '2016-10-10T13:26:10.427Z',
        updatedAt: '2016-12-14T12:00:50.408Z',
        title: 'Dawn of the Planet of the Apes',
        releaseYear: '2014',
        genre: [
            'Action',
            'Drama',
            'Sci-Fi'
        ],
        rating: 8.3,
        // tslint:disable-next-line: max-line-length
        description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes'
      },
        {

        objectId: 'kULDFy4qlt',
        title: 'X-Men: Days of Future Past',
        createdAt: '2016-10-10T13:42:01.686Z',
        updatedAt: '2016-12-14T12:02:24.981Z',
        genre: [
            'Action',
            'Sci-Fi',
            'Thriller'
        ],
        releaseYear: '2014',
        rating: 8,
           image: {
            __type: 'File',
            name: '652565bb-02ad-487f-929e-78308085ca1e_4.jpg',
            url: 'https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg'
        },
        description: 'The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.'
    }
  ]
}
