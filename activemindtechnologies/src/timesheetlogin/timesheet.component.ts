import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'services-root',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetLoginComponent implements OnInit {
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
  
}

