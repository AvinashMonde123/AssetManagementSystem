import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
updateForm:FormGroup;
users;
id;
  constructor(private fb :FormBuilder,private service:DataService,private activated:ActivatedRoute) { 
    this.activated.params.subscribe(data=>{
      console.log(data);
      
      this.id=data;
      // console.log(this.id.id);
    });
    this.activated.queryParams.subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
  }

  ngOnInit() {
    this.updateForm=this.fb.group({
       id:this.fb.control(''),
      firstName:this.fb.control(''),
      lastName:this.fb.control(''),
      email:this.fb.control(''),
      password:this.fb.control('')
    });
  }


update(id:Number,firstName:String,lastName:String,email:String,password:String){
  id=this.id.id;
    this.service.updateUserToAPI(id,firstName,lastName,email,password).subscribe(data=>{
      console.log(data);
        alert('UPDATED SUCCESSFULLY');
    });
  }
}
