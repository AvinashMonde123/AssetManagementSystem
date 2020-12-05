import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addnewassets',
  templateUrl: './addnewassets.component.html',
  styleUrls: ['./addnewassets.component.css']
})
export class AddnewassetsComponent implements OnInit {
 addassetForm:FormGroup;
  constructor(private fb :FormBuilder,private service:DataService) { }

  ngOnInit() {
    this.addassetForm=this.fb.group({
      title:this.fb.control('',[Validators.required]),
      category:this.fb.control('',[Validators.required]),
      quantity:this.fb.control('',[Validators.required]),
      price:this.fb.control('',[Validators.required]),
      additionalDetails:this.fb.control('',[Validators.required])
    });
  }

addAsset(title:String,category:String,quantity:Number,price:Number,additionalDetails:String){
    this.service.addAssetToService(title,category,quantity,price,additionalDetails).subscribe(data=>{
      console.log(data);
        alert('ASSET ADDED SUCCESSFULLY');
    });
  }
}
