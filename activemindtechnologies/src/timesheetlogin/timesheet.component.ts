import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'timesheetlogin-root',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetLoginComponent implements OnInit {
  title = 'activemindtechnologies';
  public email:string="";
  public password:string="";
  
  constructor( private router: Router) { }

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
    console.log('email='+this.email);
    console.log('password='+this.password);
   // alert('email='+this.email);
    //if(this.email!='' && this.password!=''){
    this.router.navigate(['/timesheetdashboard']);
   // }
  }
  
}

