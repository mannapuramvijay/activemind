import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'services-root',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  title = 'activemindtechnologies';
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }
}

