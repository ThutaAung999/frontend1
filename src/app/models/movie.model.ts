export class Movie {//This is  Movie
  //id? : string;
  id!:number;
  name : string;
  year : number;
  director : string;

  constructor(id:number,
              name:string,
              year:number,
              director:string){
    this.id=id;
    this.name=name;
    this.year=year;
    this.director=director;
  }
}
