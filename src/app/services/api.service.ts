import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Movie} from "../models/movie.model";


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl:string='http://localhost:8080/api/movies'

  constructor(private http:HttpClient) { }

  NewMovie(newMovie:Movie){
    return this.http.post<Movie>(`${this.baseUrl}`,newMovie)
  }

  getAllMovie(){
    return this.http.get<Movie[]>(`${this.baseUrl}`)
  }

  updateMovie(registerObj:Movie , id:number){

    return this.http.put<Movie>(`${this.baseUrl}/${id}`,registerObj);
  }

  deleteMovie(id:number){
    return  this.http.delete<Movie>(`${this.baseUrl}/${id}`);
  }

  getRegisteredMovieId(id:number){
    return this.http.get<Movie>(`${this.baseUrl}/${id}`);
  }
}
