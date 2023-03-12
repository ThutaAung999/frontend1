import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/api.service";
import {NgToastService} from "ng-angular-popup";
import {ActivatedRoute} from "@angular/router";
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


constructor( private fb : FormBuilder,
             private activatedRoute:ActivatedRoute,
             private api:ApiService,
             private toastService:NgToastService){}

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      weight:[''],
      height:[''],
      bmi:[''],
      bmiResult:[''],
      gender:[''],
      requireTrainer:[''],
      package:[''],
      important:[''],
      haveGymBefore:[''],
      enquiryDate:[''],
    })

    this.registerForm.controls['height'].valueChanges.subscribe(res=>{//res is response
      this.calculateBmi(res);
    })

    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate=val['id'];
      console.log("user ID :",this.userIdToUpdate)
      this.api.getRegisteredUserId(this.userIdToUpdate)
        .subscribe(res=>{
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

calculateBmi(heightValue:number) {
    const weight= this.registerForm.value.height;
    const height=heightValue;

    const bmi=weight/(height*height);

    this.registerForm.controls['bmi'].patchValue(bmi);


    switch (true) {
      case bmi<18.5:
            this.registerForm.controls['bmiResult'].patchValue("Underweight");      
        break;        
        
      case ( bmi>=18.5 && bmi<25):        
            this.registerForm.controls['bmiResult'].patchValue("Underweight");      
        break;  

        case ( bmi>=25 && bmi<30):
            this.registerForm.controls['bmiResult'].patchValue("Overweight");      
        break;

      default:
          this.registerForm.controls['bmiResult'].patchValue("Obese");      
        break;
    }
  }

  fillFormToUpdate(user:User){

    this.registerForm.setValue({
        firstName: user.firstName,
        lastName:user.lastName,
        email:user.email,
        mobile:user.mobile,
        weight:user.weight,
        height:user.height,
        bmi:user.bmi,
        bmiResult:user.bmiResult,
        gender:user.gender,
        requireTrainer:user.requireTrainer,
        package:user.package,
        important:user.important,
        haveGymBefore:user.haveGymBefore,
        enquiryDate:user.enquiryDate

    });
  }
}

