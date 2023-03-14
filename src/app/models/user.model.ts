/*
export class User {
  id!:number;
  firstName!:string;
  lastName!:string;
  email!:string;
  mobile!:number;
  weight!:number;
  height!:number;
  bmi!:number;
  bmiResult!:string;
  gender!:string;
  requireTrainer!:string;
  package!:string;
  important!:string[];
  haveGymBefore!:string;
  enquiryDate!:string;

}
*/


export class User {//This is  Movie
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
