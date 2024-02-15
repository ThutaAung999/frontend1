import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import{MatTableDataSource} from "@angular/material/table";
import{MatSort} from "@angular/material/sort";
import{MatPaginator} from "@angular/material/paginator";
import {ApiService} from "../services/api.service";

import {Router} from "@angular/router";

import {NgConfirmService} from "ng-confirm-box";
import {NgToastService} from "ng-angular-popup";
import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{


  inputValue:any;

  public dataSource!: MatTableDataSource<Movie>;
  public movies!:Movie[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  displayedColumns:string[]=['id','name','year','director','action'];



  /**************updated***********************/

  bindInputValue(inputVal:any){
    this.inputValue=inputVal;
  }
  /**************updated***********************/

  constructor(private api:ApiService,
              private router:Router,
              private confirm:NgConfirmService,
              private toast:NgToastService){}

  ngOnInit(){
    this.getMovies();
  }



  getMovies(){
    this.api.getAllMovie().subscribe(movies=>{
        this.movies=movies;
        this.dataSource=new MatTableDataSource(this.movies);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id:number){
    this.router.navigate(['update',id]);
  }

  delete(id:number){

    this.confirm.showConfirm("Are you sure want to confirm?",
      ()=>{
        this.api.deleteMovie(id)
          .subscribe(response=>{
            this.toast.success({detail:'SUCCESS',summary:'Delete Successfully',duration:3000});
            this.getMovies();
          })
      },
      ()=>{

      }
      )
  }


  /**************updated***********************/



  /**************updated***********************/
}

