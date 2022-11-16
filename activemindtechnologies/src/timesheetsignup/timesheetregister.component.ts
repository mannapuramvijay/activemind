import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'services-root',
  templateUrl: './timesheetregister.component.html',
  styleUrls: ['./timesheetregister.component.css']
})
export class TimesheetRegisterComponent implements OnInit {
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
  goToLogin(){
    this.router.navigate(['/timesheetlogin']);
   
  }
}

