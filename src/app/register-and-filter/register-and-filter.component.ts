import {Component, Input, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../models/movie.model";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-register-and-filter',
  templateUrl: './register-and-filter.component.html',
  styleUrls: ['./register-and-filter.component.scss']
})
export class RegisterAndFilterComponent {

  inputValue:any;

  @Input() dataSource!: MatTableDataSource<Movie>;
  @Output() filterEvent=new EventEmitter<any>();

    applyFilter(inputVal:any){
      this.inputValue=inputVal;
      this.filterEvent.emit(this.inputValue);
    }

  }

