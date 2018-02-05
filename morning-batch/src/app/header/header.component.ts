import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'My first angular application';
  redClass = "green";
  btn2="btn";
  myStyle = "'color: white; background-color: blue'"
  buttons = ['btn1'];
  password;
  nameInHeader;
  constructor() { }

  showPassword(){
    console.log(this.password)
  }

  receiveOutput(e){
    console.log(e);
  }
  receiveOutput1(e){
    console.log(e, 'from 1')
  }
  ngOnInit() {
  }

}
