import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'services-root',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
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
}

