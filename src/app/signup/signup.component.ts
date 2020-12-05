import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm:FormGroup;
  constructor(private fb :FormBuilder,private service:DataService) { }

  ngOnInit() {
    this.signupForm=this.fb.group({
      firstName:this.fb.control('',[Validators.required]),
      lastName:this.fb.control('',[Validators.required]),
      email:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required])
    });
  }

  signin(firstName:String,lastName:String,email:String,password:String){
    this.service.addUserToService(firstName,lastName,email,password).subscribe(data=>{
      console.log(data);
        alert('SIGNIN SUCCESSFULLY');
    });
  }

}
