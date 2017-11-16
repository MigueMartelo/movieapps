import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MoviesService {

  private apiKey:string = "3f3e1a61d79e02f212ef84afe3357aef";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  movies:any[] = [];

  constructor( private jsonp:Jsonp) { }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                     .map(res => res.json());

  }

  getPopulares(){

    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                     .map(res => res.json());
  }

  getPopularesKids(){

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                     .map(res => res.json());
  }

  searchMovie(query:string){

    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apiKey}&query=${query}&language=es&page=1&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                     .map( res => {
                       this.movies = res.json().results;
                       return this.movies;
                     });

  }

}
