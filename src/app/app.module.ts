import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyNetflixAppComponent } from './mynetflix-app.component';

@NgModule({
  declarations: [
  MyNetflixAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyNetflixAppComponent]
})
export class AppModule { }
