import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyNetflixAppComponent } from './mynetflix-app.component';
import { MoviesListComponent } from './movies/movies-list.component';



@NgModule({
  declarations: [
  MyNetflixAppComponent,
  MoviesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MyNetflixAppComponent]
})
export class AppModule { }
