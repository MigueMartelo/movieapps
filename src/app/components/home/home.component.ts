import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera:any;

  constructor( private _moviServ:MoviesService) {

    this._moviServ.getCartelera().subscribe(movies => {
                                  console.log(movies);
                                  this.cartelera = movies;
                                });
  }

  ngOnInit() {
  }

}
