import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'activemindtechnologies';
  constructor( private router: Router) { }

  ngOnInit() {
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }
}

