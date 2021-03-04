import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  

  nameArray =[];
  genderArray = [];
  emailArray = [];
  mobileArray = [];
  categoryArray = [];
  technologyArray = [];
  imageUrlArray = [];

  constructor(private viewUser: SharedServiceService) { }

  public ngOnInit(): void {
    
    this.nameArray = this.viewUser.getData("name");
    this.genderArray = this.viewUser.getData("gender");
    this.emailArray = this.viewUser.getData("email");
    this.mobileArray = this.viewUser.getData("mobile");
    this.categoryArray = this.viewUser.getData("category");
    this.technologyArray = this.viewUser.getData("technology");
    this.imageUrlArray = this.viewUser.getData("imageUrl");

  }

  
}
