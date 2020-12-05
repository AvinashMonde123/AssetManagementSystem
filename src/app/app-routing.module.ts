import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { CurrentassetsComponent } from './currentassets/currentassets.component';
import { AddnewassetsComponent } from './addnewassets/addnewassets.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserassetsComponent } from './userassets/userassets.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path: 'editprofile/:id',component:EditprofileComponent},
  {path: 'userprofile/:id',component:UserprofileComponent},
  {path:'currentassets',component:CurrentassetsComponent, canActivate:[AuthGuard]},
  {path:'addnewassets',component:AddnewassetsComponent},
  {path:'generatereport',component:GeneratereportComponent},
  {path:'logout',component:LogoutComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userassets',component:UserassetsComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
