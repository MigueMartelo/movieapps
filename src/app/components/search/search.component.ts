import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieImagePipe }  from '../../pipes/movie-image.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string = "";

  constructor(public _ms:MoviesService) { }

  ngOnInit() {
  }

  searchMovie(){

    if(this.search.length == 0){return;}

    this._ms.searchMovie(this.search).subscribe();

  }

}
