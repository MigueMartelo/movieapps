import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie:any;
  regresarA:string;
  busqueda:string;

  constructor(public _ms:MoviesService, public router:ActivatedRoute) {

    this.router.params.subscribe(params => {
      if(params['busqueda']){
        this.busqueda = params['busqueda'];
      }
      this.regresarA = params['pag'];
      console.log(params);
      this._ms.getMovie(params['id'])
              .subscribe( movie => this.movie = movie)

    })
  }

  ngOnInit() {
  }

}
