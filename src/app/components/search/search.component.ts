import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string = "";

  constructor(public _ms:MoviesService, public router:ActivatedRoute) {

    this.router.params.subscribe(params => {
      console.log(params);
      if(params['texto']){
        this.search = params['texto'];
        this.searchMovie();
      }
    })
  }

  ngOnInit() {
  }

  searchMovie(){

    if(this.search.length == 0){return;}

    this._ms.searchMovie(this.search).subscribe();

  }

}
