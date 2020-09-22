import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavMoviesComponent } from './fav-movies.component';
import { FavMovieService } from './fav-movies.service';
import { ActivatedRoute } from '@angular/router';
import { Directive, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

@Directive({
   // tslint:disable-next-line: directive-selector
   selector : '[routerLink]',
   // tslint:disable-next-line: no-host-metadata-property
   host : { '(click)': 'onClick()'}
})

// tslint:disable-next-line: directive-class-suffix
export class RouterLinkDirectiveStub {
      @Input ('routerLink') linkParams: any;
      navigatedTo: any = null;

      onClick() {
           this.navigatedTo = this.linkParams;
      }
}

describe('FavMoviesComponent', () => {
     let fixture: ComponentFixture<FavMoviesComponent>;
      // tslint:disable-next-line: one-variable-per-declaration
     let mockFavMoviesService, mockActivateRoute;
     let FAVMOVIES;

     beforeEach( () => {
      mockFavMoviesService = jasmine.createSpyObj(['addMovie', 'showFavMoviesList', 'removeAFavMovie', 'userHasLiked']);

      mockActivateRoute = {
        snapshot: { paramMap: { get: () => 'n4mV28e42t'}}
     };

      FAVMOVIES = [
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
            description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes'
        }
     ];

      TestBed.configureTestingModule({
           declarations: [FavMoviesComponent,
            RouterLinkDirectiveStub
          ],
           providers: [
             { provide: ActivatedRoute, useValue: mockActivateRoute },
             {provide: FavMovieService, useValue: mockFavMoviesService }
          ],
          // schemas: [NO_ERRORS_SCHEMA]
       });
      fixture = TestBed.createComponent(FavMoviesComponent);
     });

     it('should have the correct route on going back, after removing', () => {
    mockFavMoviesService.removeAFavMovie.and.returnValue(FAVMOVIES);
    fixture.detectChanges();
    const FavListComponent = fixture.debugElement.queryAll(By.directive(FavMoviesComponent));

    const routerLink = FavMoviesComponent[0]
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    FavMoviesComponent[0].query(By.css('')).triggerEventHandler('click', null);

    expect(routerLink.navigatedTo).toBe('/home');
   });

});
