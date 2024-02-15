import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateMovieComponent } from './create-update-movie/create-update-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MovieDetailComponent} from "./user-detail/movie-detail.component";

const routes: Routes = [

  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'newMovie' ,component:CreateUpdateMovieComponent},
  {path:'movie-list',component:MovieListComponent},
  {path:'detail/:id',component:MovieDetailComponent},
  {path:'update/:id',component:CreateUpdateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
