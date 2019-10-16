import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyNetflixAppComponent } from './mynetflix-app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MoviesService } from './movies/shared/movies.service';



@NgModule({
  declarations: [
  MyNetflixAppComponent,
  MoviesListComponent,
  MovieThumbnailComponent,
  NavBarComponent
  ],

  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [MyNetflixAppComponent]
})
export class AppModule { }
