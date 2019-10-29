import { MoviesListComponent } from './movies-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MoviesService } from './shared/movies.service';
import { FavMovieService } from './fav_movies/fav-movies.service';
import { Component, Input } from '@angular/core';
import { IMovies } from './shared/movies.model';
import { SessionStorageFavouritesService } from './shared/session-storage-favourites.service';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('MovieListComponent', () => {
    let fixture: ComponentFixture<MoviesListComponent>;
    // tslint:disable-next-line: one-variable-per-declaration
    let mockMoviesService, mockFavService, mockSessionStorage;
    let MOVIES;

    @Component({
         selector: 'movie-thumbnail',
         template : '<div></div>'
    })
    class FakeMovieThumbnailComponent {
      // tslint:disable-next-line: no-input-rename
      @Input(' movieSelection')  movie: IMovies;
      newValue: boolean;
      newFavList: IMovies[];

    }

    beforeEach( () => {
      MOVIES = [
        {
          objectId: 'n4mV28e42t',
          image: {
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
      },
      {
          objectId: '4ZsUqwmNT1',
          title: 'Despicable Me 2',
          createdAt: '2016-10-10T13:53:34.666Z',
          updatedAt: '2016-12-14T12:10:55.693Z',
          releaseYear: '2013',
          genre: [
              'Animation',
              'Comedy',
              'Family'
          ],
          rating: 7.3,
          image: {
              __type: 'File',
              name: '43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg'
          },
          description: 'Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.\n'
      },
      {
          objectId: '9zqDewYByp',
          title: 'A Bug\'s Life',
          createdAt: '2016-10-10T13:55:37.972Z',
          updatedAt: '2016-12-14T12:11:38.383Z',
          releaseYear: '1998',
          genre: [
              'Animation',
              'Adventure',
              'Comedy'
          ],
          rating: 7.2,
          image: {
              __type: 'File',
              name: '92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg',
              url: 'https://peruzal-parse-media.s3.amazonaws.com/92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg'
          },
          description: 'On behalf of "oppressed bugs everywhere," an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.'
      }];

      mockMoviesService = jasmine.createSpyObj(['getMovies', 'getMovie', 'getMovieGenre', 'searchMovies']);
      mockFavService = jasmine.createSpyObj( ['addFavMovie', 'showFavMoviesList', 'removeAFavMovie', 'userHasLiked']);
      mockSessionStorage = jasmine.createSpyObj(['storeOnSessionStorage', 'retrieveFromSessionStorage', 'clearAllSessionStorage', 'clearAllSessionStorage']);

      TestBed.configureTestingModule ({
          declarations: [
            FakeMovieThumbnailComponent,
            MoviesListComponent
          ],
          imports: [ FormsModule],
          providers: [
            { provide: MoviesService, useValue: mockMoviesService },
            { provide: FavMovieService, useValue: mockFavService },
            { provide: SessionStorageFavouritesService, useValue: mockSessionStorage }
          ]
      });

      fixture = TestBed.createComponent(MoviesListComponent);
      mockMoviesService.getMovie.and.returnValue({  objectId: 'n4mV28e42t',
        image: {
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
        description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes'
    });

  });

    it('should get movies title page ', () => {
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain('Movies');
     });

    it('should get movies correctly from the service', () => {
          mockMoviesService.getMovies.and.returnValue(MOVIES);
          fixture.detectChanges();
          expect(fixture.componentInstance.movies.length).toBe(4);
     });
    it('should correctly list each movie thumbnail', () => {
      mockMoviesService.getMovies.and.returnValue(MOVIES);
      fixture.detectChanges();

      expect(fixture.debugElement.queryAll(By.css('movie-thumbnail')).length).toBe(4);
       });



});
