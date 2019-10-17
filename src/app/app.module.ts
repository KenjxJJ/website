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
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { HttpClientModule } from '@angular/common/http';


const jQuery = window['$'];

@NgModule({
  declarations: [
    MyNetflixAppComponent,
  MoviesListComponent,
  MovieThumbnailComponent,
  NavBarComponent,
  SimpleModalComponent,
  ModalTriggerDirective

  ],

  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
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
