import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CompanyComponent } from 'src/company/company.component';
import { ContactusComponent } from 'src/contactus/contactus.component';
import { EmployeeComponent } from 'src/employee/employee.component';
import { HeaderComponent } from 'src/header/header.component';
import { HomeComponent } from 'src/home/home.component';
import { ServicesComponent } from 'src/services/services.component';
import { TechComponent } from 'src/Technology/tech.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    ContactusComponent,
    TechComponent,
    CompanyComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
