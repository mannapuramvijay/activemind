import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  title = 'activemindtechnologies';
  loader:boolean = false;
  constructor( private router: Router) { }

  async ngOnInit() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});
    this.loader=true;
  }
  
   callServices(){
    console.log("services call");
      this.router.navigate(['/services']);
   
  }

  callCompany(){
    console.log("Company call");
      this.router.navigate(['/company']);
  }
}

