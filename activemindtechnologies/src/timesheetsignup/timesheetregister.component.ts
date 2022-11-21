import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'services-root',
  templateUrl: './timesheetregister.component.html',
  styleUrls: ['./timesheetregister.component.css']
})
export class TimesheetRegisterComponent implements OnInit {
  title = 'activemindtechnologies';
  public fname:string="";
  public lname:string="";
  public email:string="";
  public password:string="";
  public submitted:boolean=false;
  public signinform = this.fb.group({
    'fname': [this.fname, Validators.required],
    'lname':[this.lname, Validators.required],
    'email':[this.email, Validators.required],
    'password':[this.password, Validators.required],
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
  goToLogin(){
    this.router.navigate(['/timesheetlogin']);
   
  }

  goToSubmit(){
    this.submitted=true;
  }
}

