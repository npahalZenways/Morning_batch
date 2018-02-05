import { Component, Input, Output, EventEmitter, OnChanges, ViewChild } from "@angular/core";

@Component({
    selector: 'app-feb5',
    // template: `
    // <div>
    //     <p>This is feb5 component</p>
    //     <p>This is another para in this component</p>
    //     <span>{{myname}}</span>
    // </div>
    // `,
    templateUrl: './feb5.html',
    // styles: ['p{color: red; font-size: 25px}', 'h1{color: green}', 'div{background-color:yellow}'],
    // styleUrls: ['../header/header.component.css'],
    // host:{

    // },
    // inputs: ['name']
})
export class Feb5Component {
    email;
    name;

    @ViewChild('myform') form;

    @Input('name') myname;

    @Output() giveOutput = new EventEmitter();

    testevent = new EventEmitter();
    testTrigger(){
        console.log('called')
        this.testevent.emit('triggered');
    }
    print(e){
        console.log('print')
        console.log(e)
    }
    sendOutput(val){
        this.giveOutput.emit(val);
    }

    getform(){
        console.log('email and name', this.email, this.name);
        // this.form.reset();
        this.email = '';
        this.name = '';
        // this.form.form.markAsUntouched();
        this.form.form.markAsTouched(false)
    }
}