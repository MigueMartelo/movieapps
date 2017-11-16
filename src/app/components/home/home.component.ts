import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;
  populares:any;
  popularesKids:any;

  constructor( private _moviServ:MoviesService) {

    this._moviServ.getCartelera().subscribe(movies => this.cartelera = movies.results);

    this._moviServ.getPopulares().subscribe(movies => this.populares = movies.results);

    this._moviServ.getPopularesKids().subscribe(movies => this.popularesKids = movies.results);

  }

  ngOnInit() {
  }

}
