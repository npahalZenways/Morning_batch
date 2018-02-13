import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private myrouter: Router){

  }
  route(name){
    this.myrouter.navigate(['about/nitin']);
    localStorage.setItem('name', 'niitin')
  }
}
