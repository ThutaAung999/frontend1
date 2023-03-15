import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-register-and-filter',
  templateUrl: './register-and-filter.component.html',
  styleUrls: ['./register-and-filter.component.scss']
})
export class RegisterAndFilterComponent {

  public dataSource!: MatTableDataSource<Movie>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
