import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {NgToastService} from "ng-angular-popup";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit{
  public packages:string[]=["Monthly","Quarterly","Yearly"];
  public genders:string[]=["Male","Female"];
  public importantList:string[]=[

    'Toxix Fax reduction',
    'Energy and Endurance',
    'Building Lean Muscle',
    'Healthier Digestive System',
    'Sugar Carving Body',
    'Fitness'
  ];

public registerForm !: FormGroup;
public userIdToUpdate!:number;
public isUpdateActive:boolean=false;


constructor( private fb : FormBuilder,
             private activatedRoute:ActivatedRoute,
             private api:ApiService,
             private toastService:NgToastService,
             private router:Router){


}


  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:[''],
      year:[''],
      director:['']
    })


    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate=val['id'];
      console.log("user ID :",this.userIdToUpdate);
      this.api.getRegisteredUserId(this.userIdToUpdate)
        .subscribe(res=>{
          this.isUpdateActive=true;
          this.fillFormToUpdate(res);
        })
    })
  }


submit(){
 // console.log(this.registerForm.value);

  this.api.postRegistration(this.registerForm.value)
          .subscribe(res=>{
            this.toastService.success({detail:"Success",
                                      summary:"Enquire  Added",duration:3000});
            this.registerForm.reset();
          });
}

update(){
  this.api.updateRegisteredUser(this.registerForm.value,
                                this.userIdToUpdate).subscribe(res=>{
          this.toastService.success({detail:"Success",
            summary:"Enquire Updated",duration:3000});
      this.registerForm.reset();

      this.router.navigate(['list']);
    });
}


  fillFormToUpdate(user:User){

    this.registerForm.setValue({
        name: user.name,
        year:user.year,
        director:user.director
    });
  }
}

