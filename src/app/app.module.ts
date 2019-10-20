import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { MyNetflixAppComponent } from './mynetflix-app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MoviesService } from './movies/shared/movies.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { JQ_TOKEN } from './common/jquery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movies/movie-details.component';
import { MovieResolver } from './movies/movie-list.resolver';
import { FavMoviesComponent } from './movies/fav_movies/fav-movies.component';
import { FavMovieService } from './movies/fav_movies/fav-movies.service';


let jQuery = window['$'];

@NgModule({
  declarations: [
          MyNetflixAppComponent,
          MoviesListComponent,
          MovieThumbnailComponent,
          NavBarComponent,
          SimpleModalComponent,
          ModalTriggerDirective,
         MovieDetailsComponent,
         FavMoviesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    NgbModule
  ],
  providers: [
       MoviesService,
        {
         provide: JQ_TOKEN, useValue: jQuery
        },
        MovieResolver,
        FavMovieService
    ],
  bootstrap: [MyNetflixAppComponent]
})

export class AppModule {}
