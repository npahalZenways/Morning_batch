import { Directive, ElementRef, Input, HostListener, OnInit, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[myhighlight]',
    host:{
        '(mouseenter)': 'changeColor($event)'
    }
})
export class MyDirective implements OnInit{
    @Input('myhighlight') color;
    constructor(private element: ElementRef) {
        
    }
    @Output('direoutput') doSomething = new EventEmitter();
    changeColor(e){
        console.log(e);
        this.element.nativeElement.style.color = this.color || 'black';
        this.doSomething.emit(this.color);
    }
    @HostListener('mouseleave') changeBack() {
        this.element.nativeElement.style.color = 'black';
    }

    ngOnInit() { 
        // this.changeColor();
    }
}