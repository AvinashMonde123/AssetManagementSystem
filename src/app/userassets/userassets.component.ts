import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userassets',
  templateUrl: './userassets.component.html',
  styleUrls: ['./userassets.component.css']
})
export class UserassetsComponent implements OnInit {

assets;

  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    let observables= this.service.getUserDataFromAPI();
      observables.subscribe(response=>
      {
        this.assets=response['data'];
        console.log(this.assets);
        
      })
  }

request(userId:Number,title:String,category:String,quantity:Number,price:Number,additionalDetails:String)
{
  alert('REQUEST SEND TO ADMIN FOR APPROVAL');
  console.log(userId);
  console.log(title);
  this.service.addToCurrentAssets(title,category,quantity,price,additionalDetails).subscribe(data=>{
    console.log(data);
    // alert('');
    
  });
  // this.router.navigate([`currentassets/${userId}`],
  // {
  //   queryParams:
  //   {

  // title:this.assets.title,
  // quantity:this.assets.quantity,
  // price:this.assets.price,
  //  category:this.assets.category,
  //   additionaldetails:this.assets.additionaldetails
  //   }
  // })
  
}

}