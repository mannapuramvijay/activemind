import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from 'src/company/company.component';
import { ContactusComponent } from 'src/contactus/contactus.component';
import { EmployeeComponent } from 'src/employee/employee.component';
import { HomeComponent } from 'src/home/home.component';
import { ServicesComponent } from 'src/services/services.component';
import { TechComponent } from 'src/Technology/tech.component';
import { TimesheetLoginComponent } from 'src/timesheetlogin/timesheet.component';
import { TimesheetRegisterComponent } from 'src/timesheetsignup/timesheetregister.component';

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch: 'full' },
  { path: 'home', component: HomeComponent,pathMatch: 'full' },
  {path: 'services', component: ServicesComponent,pathMatch: 'full'},
  {path: 'contactus', component: ContactusComponent,pathMatch: 'full'},
  {path: 'tech', component: TechComponent,pathMatch: 'full'},
  {path: 'company', component: CompanyComponent,pathMatch: 'full'},
  {path: 'employee', component: EmployeeComponent,pathMatch: 'full'},
  {path: 'timesheetlogin', component: TimesheetLoginComponent,pathMatch: 'full'},
  {path: 'timesheetregister', component: TimesheetRegisterComponent,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
