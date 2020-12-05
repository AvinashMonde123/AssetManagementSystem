import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generatereport',
  templateUrl: './generatereport.component.html',
  styleUrls: ['./generatereport.component.css']
})
export class GeneratereportComponent implements OnInit {

reports:any[]=[];
id;
sum=0;
value=0;
// assets;
// totalAssets;
// totalWorths;
// add=0;
// totalAssets=this.reports.category;  
// totalAssetsWorth=this.reports.totalprice;


  constructor(private service:DataService,private activated:ActivatedRoute) { 
    // this.activated.params.subscribe(data=>{

    //   console.log(data);
      
    //   this.id=data;
    //   console.log(this.id);
    // });
    // this.activated.queryParams.subscribe(data=>{
    //   this.assets=data;
    //   console.log(data);
      
    //   console.log(this.assets);
    // })
  }

  ngOnInit() 
  {
    let observables= this.service.getReport().subscribe(response=>{
      console.log(response);
      this.reports=response['data'];
      this.id=response['data'].id;
      console.log(this.reports);
    });
  }
//     observables.subscribe(response=>
//     {
//       this.reports=response['data'];
//       console.log(this.reports);
// // for (let index = 0; index < response; index++) {
// //   this.add = this.add+response['data'][index].totalprice;
  
// // }
// // console.log(this.add);

//   //  console.log(this.reports.totalprice);
   
//     });

// totalAsset(){
  
// }
  

  totalWorth(){
    console.log(this.reports);
      
  this.reports.forEach(report => {
    console.log(report);
    
    this.sum = this.sum + report.totalPrice;
    
  }); 
}  


totalAsset(){
  console.log(this.reports);

  this.reports.forEach(report =>{
    console.log(report);
    
    this.value=this.value +report.quantity;
  });
  
}
}
