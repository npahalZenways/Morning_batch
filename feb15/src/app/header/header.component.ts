import { Component, OnInit } from '@angular/core';
import { MyService } from "../myservice";

@Component({
  selector: 'input[type=text]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mydate = new Date();
  mynumber = 2374.87657;
  str = "This is a string";
  myarray = [{
    name: 'Nitin',
    marks: 200
  },{
    name: 'Amit',
    marks: 400
  },{
    name: 'Sachin',
    marks: 300
  },{
    name: 'Shashank',
    marks:199
  },{
    name: 'Gaurav',
    marks: 9878
  },{
    name: 'Pritam',
    marks: 989
  }];
  type = 'even';
  constructor(private service:MyService) { }
  print() {
    for (let i=0; i < 5000; i++){console.log(this.service.name)}
  }
  change(name) {
    this.service.name = name;
  }
  printthis(e){
    console.log(e)
  }
  ngOnInit() {
  }

}
