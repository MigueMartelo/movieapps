import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";
import { SearchComponent } from "./components/search/search.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id/:pag', component: MovieComponent },
  { path: 'movie/:id/:pag/:busqueda', component: MovieComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
