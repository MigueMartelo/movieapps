import { Component } from '@angular/core';
import { MoviesService } from "./services/movies.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (public _ms:MoviesService, private router:Router) {
    this._ms.getPopulares().subscribe();
  }

  searchMovie(texto:string){
    if(texto.length == 0){ return; }

    this.router.navigate(['/buscar', texto]);

  }
}
