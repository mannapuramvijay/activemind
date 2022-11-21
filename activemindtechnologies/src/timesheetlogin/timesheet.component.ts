import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'timesheetlogin-root',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetLoginComponent implements OnInit {
  title = 'activemindtechnologies';
  public emailVar:string="";
  public password:string="";
  public submitted:boolean =false;
  public signinform = this.fb.group({
    'email': [this.emailVar, Validators.email],
    'password':[this.password, Validators.required]
});
  constructor( private router: Router,private fb:FormBuilder) { }
  

  ngOnInit() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }
  goToRegister(){
    this.router.navigate(['/timesheetregister']);
   
  }

  goToDashboard(){
    console.log('email?'+this.signinform.get('email')?.value);
    console.log('password='+this.signinform.get('password')?.value);
    console.log("this.email=="+this.emailVar);
    console.log("this.pwd=="+this.password);
    this.submitted=true;
   // this.emailVar=this.signinform.get('email')?.value;
   // alert('email='+this.email);
    if(this.emailVar!='' && this.password!=''){
    this.router.navigate(['/timesheetdashboard']);
   }
  }
  
}

