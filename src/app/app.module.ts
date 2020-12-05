import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './guard/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DeleteassetComponent } from './deleteasset/deleteasset.component';
import { UpdateassetComponent } from './updateasset/updateasset.component';
import { SearchassetComponent } from './searchasset/searchasset.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    EditprofileComponent,
    UserprofileComponent,
    CurrentassetsComponent,
    AddnewassetsComponent,
    GeneratereportComponent,
    LogoutComponent,
    AdminloginComponent,
    UserassetsComponent,
    DeleteassetComponent,
    UpdateassetComponent,
    SearchassetComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
