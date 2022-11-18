import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'timesheetlogin-root',
  templateUrl: './timesheet_details.component.html',
  styleUrls: ['./timesheet_details.component.css']
})
export class TimesheetDetailsComponent implements OnInit {
  title = 'activemindtechnologies';
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
  goToTimesheet(){
    this.router.navigate(['/timesheetdetails']);
   
  
  }
  
}

