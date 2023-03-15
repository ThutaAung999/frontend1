import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";

import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit{


  public movieId! : number;
  movieDetail!: Movie;



  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){
  }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(val=>{
      this.movieId=val['id'];
      this.fetchMovieDetails(this.movieId);
    })
  }


  fetchMovieDetails(movieId:number){
    this.api.getRegisteredMovieId(movieId)
      .subscribe(response=>{
        this.movieDetail=response;
        console.log(this.movieDetail)
      })
  }
}
