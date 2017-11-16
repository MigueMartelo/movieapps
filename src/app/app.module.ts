import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from "@angular/http";

import { MoviesService } from "./services/movies.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

import { APP_ROUTING } from "./app.routes";
import { MovieImagePipe } from './pipes/movie-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    MovieImagePipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
