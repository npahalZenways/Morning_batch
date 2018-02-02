import { Component, ViewChild } from "@angular/core";

@Component({
    selector: 'feb2',
    templateUrl: './feb2.html',
    styles: ['.red{ color: red }', '.blue{ color: blue }', '.default{ color: orange }', '.active{ font-weight: bold }']
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
    getValue(){
        // this.input = input;
        console.log(this.newInput);
    }
}