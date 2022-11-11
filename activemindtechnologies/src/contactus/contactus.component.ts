import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'services-root',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  title = 'activemindtechnologies';
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }
}

