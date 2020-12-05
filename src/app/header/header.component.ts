import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }

  userLogout(){
  localStorage.removeItem("user");
  this.router.navigateByUrl('login');
}

adminLogout(){
  localStorage.removeItem("admin");
  this.router.navigateByUrl('login');
}
isCustomerLoggedIn(){
  return localStorage.getItem("user");
}

isAdminLoggedIn(){
  return localStorage.getItem("admin");
}
}
