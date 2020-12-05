import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
api='http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  getDataFromAPI(){
   return this.http.get('http://localhost:8080/assets');
  }
  
  // getReport(category,quantity,totalprice){
  //   let report={
  //     category:category,
  //     quantity:quantity,
  //     totalprice:totalprice
  //   }
  //   return this.http.post('http://localhost:8080/report',report);
  // }

  addUserToService(firstName,lastName,email,password){
    let user={
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    return this.http.post(`http://localhost:8080/register`,user);
  }

  getUserFromAPI(){
    return this.http.get('http://localhost:8080/detail');
  }


  addAssetToService(title,category,quantity,price,additionalDetails){
    let asset={
      title:title,
      category:category,
      quantity:quantity,
      price:price,
      additionalDetails:additionalDetails
    }
    return this.http.post('http://localhost:8080/asset',asset);
  }


  userLogin(email,password){
    // let user={
    //   email:email,
    //   password:password
    // }
  return this.http.get('http://localhost:8080/login/'+'?'+'email'+'='+email+'&'+'password'+'='+password);
  }

  updateUserToAPI(id,firstName,lastName,email,password){
    let user={
      id:id,
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password
    }
    console.log(user);
    
    return this.http.put('http://localhost:8080/update',user);
  }

  getUserDataFromAPI(){
    return this.http.get('http://localhost:8080/userassets');
  }
  
  addToCurrentAssets(title,category,quantity,price,additionalDetails){
    let assets={
      title:title,
      category:category,
      quantity:quantity,
      price:price,
      additionalDetails:additionalDetails
    }
    return this.http.post('http://localhost:8080/adminAsset',assets);
  }

  removeAsset(id){
    console.log(id);
    
    return this.http.delete('http://localhost:8080/delete?id='+id); 
  }

  addToGenerateReport(category,quantity,totalPrice){
    let add={
      // id:id,
      category:category,
      quantity:quantity,
      totalPrice:totalPrice
    }
    return this.http.post('http://localhost:8080/report',add);
  }

getReport(){
  return this.http.get('http://localhost:8080/report');
}

}
