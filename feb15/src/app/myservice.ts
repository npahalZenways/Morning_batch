import { Injectable } from "@angular/core";

@Injectable()
export class MyService{
    name = "hello";
    constructor(){
        console.log('my service called');
    }
}