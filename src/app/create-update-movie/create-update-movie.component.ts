import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {NgToastService} from "ng-angular-popup";
import {ActivatedRoute, Router} from "@angular/router";

import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-create-update-movie',
  templateUrl: './create-update-movie.component.html',
  styleUrls: ['./create-update-movie.component.scss']
})
export class CreateUpdateMovieComponent implements OnInit{


public movieForm !: FormGroup;
public movieIdToUpdate!:number;
public isUpdateActive:boolean=false;


constructor( private fb : FormBuilder,
             private activatedRoute:ActivatedRoute,
             private api:ApiService,
             private toastService:NgToastService,
             private router:Router){


}


  ngOnInit(): void {
    this.movieForm=this.fb.group({
      name:[''],
      year:[''],
      director:['']
    })


    this.activatedRoute.params.subscribe(val=>{
      this.movieIdToUpdate=val['id'];
      console.log("movie ID :",this.movieIdToUpdate);
      this.api.getRegisteredMovieId(this.movieIdToUpdate)
        .subscribe(res=>{
          this.isUpdateActive=true;
          this.fillFormToUpdate(res);
        })
    })
  }


submit(){
 // console.log(this.movieForm.value);

  this.api.NewMovie(this.movieForm.value)
          .subscribe(res=>{
            this.toastService.success({detail:"Success",
                                      summary:"Movie  Added",duration:3000});
            this.movieForm.reset();
          });
}

update(){
  this.api.updateMovie(this.movieForm.value,
                                this.movieIdToUpdate).subscribe(res=>{
          this.toastService.success({detail:"Success",
            summary:"Movie Updated",duration:3000});
      this.movieForm.reset();

      this.router.navigate(['list']);
    });
}


  fillFormToUpdate(movie:Movie){

    this.movieForm.setValue({
        name: movie.name,
        year:movie.year,
        director:movie.director
    });
  }
}

