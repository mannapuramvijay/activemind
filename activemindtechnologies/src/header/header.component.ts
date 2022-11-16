import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'activemindtechnologies';
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }
  callHome(){
    console.log("services call");
  this.router.navigate(['/home']);

}
callContactus(){
  console.log("contact us call");
    this.router.navigate(['/contactus']);
 
}
callTech(){
  console.log("Tech call");
    this.router.navigate(['/tech']);
 
}
callCompany(){
  console.log("Company call");
    this.router.navigate(['/company']);
}

callEmployeePortal(){
  console.log("Company call");
    this.router.navigate(['/timesheetlogin']);
}
}

