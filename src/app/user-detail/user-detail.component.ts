import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";
import {User} from "../models/user.model";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{


  public userId! : number;
  userDetail!: User;



  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){
  }


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(val=>{
      this.userId=val['id'];
      this.fetchUserDetails(this.userId);
    })
  }


  fetchUserDetails(userId:number){
    this.api.getRegisteredUserId(userId)
      .subscribe(response=>{
        this.userDetail=response;
        console.log(this.userDetail)
      })
  }

}
