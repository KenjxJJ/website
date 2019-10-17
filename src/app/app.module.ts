import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyNetflixAppComponent } from './mynetflix-app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { MoviesService } from './movies/shared/movies.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { JQ_TOKEN } from './common/jquery.service';


const jQuery = window['$'];

@NgModule({
  declarations: [
  MyNetflixAppComponent,
  MoviesListComponent,
  MovieThumbnailComponent,
  NavBarComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MoviesService,
    {
       provide: JQ_TOKEN, useValue: jQuery
    }
  ],
  bootstrap: [MyNetflixAppComponent]
})
export class AppModule { }
