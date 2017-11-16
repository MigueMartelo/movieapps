import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';

import { MoviesService } from "./services/movies.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

import { APP_ROUTING } from "./app.routes";
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    MovieImagePipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
