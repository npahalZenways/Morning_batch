import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'feb2',
    templateUrl: './feb2.html',
    styleUrls: ['./feb2.css']
})
export class feb2Component{
    input: boolean = false;
    switchCondition;
    myArray = [{
        name: "Nitin",
        marks: 34
    }, {
            name: "AMit",
            marks: 54
    }, {
            name: "Sachin",
            marks: 55
    },{
            name:"Sahil"
    }]
    @ViewChild('myInput') newInput;
    getValue(input){
        // this.input = input;
        console.log(this.newInput);
    }
    receiveOutput(e) {
        console.log(e, 'from feb 2');
    }
    receiveOutput1(e) {
        console.log(e, 'from feb 2');
    }
}