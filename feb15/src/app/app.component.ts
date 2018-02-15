import { Component } from '@angular/core';
import { MyService } from "./myservice";
import { Http, RequestOptions, Headers, URLSearchParams } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options;
  header;
  parameters;
  constructor(private service: MyService, private http:Http){
    console.log('app component');
    this.header = new Headers();
    // this.header.append('session-id', 'dfghj');
    this.parameters = new URLSearchParams();
  }
  print(){
    for(let i=0; i<5000; i++){console.log(this.service.name)}
  }
  change(name){
    this.service.name = name;
  }
  callApi(base){
    this.parameters.set('base', base?base:'USD');
    this.options = new RequestOptions({
      params: this.parameters
    });    
    this.http.get('https://api.fixer.io/latest', this.options).subscribe(function(res){
      console.log(res.json());
    }, function(err){
      console.log(err);
    })
  }
}
