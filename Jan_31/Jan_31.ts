// import { m1 } from "./Jan_31_2";
import * as file_two from "./Jan_31_2";

//Unions
function returnPadding(paddingValue:number|string):string{
    if(typeof paddingValue == 'number'){
        return paddingValue + 'px';
    }
    else {
        return paddingValue;
    }
}

console.log(returnPadding(10)) // returns 10px;
console.log(returnPadding('20px')) //returns 20px;
// console.log(returnPadding(true)) //retrun true;

//generics
function random<U>(params:U) :U{
    return params;
}

random<number>(1);
random<string>('');

var strArray: Array<string>;

interface abc {
    name;
    getName();
}

class myClass implements abc {
    name;
    constructor(parameters) {
        
    }
    getName(){}
}

var classArray: Array<abc> = [{name: 'hello', getName: function () {
    
}}];

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "d"));


var insFromAnotherFile = new file_two.m1.myClass1('hello');

// function changeSkill(target) {
//     target.prototype.skill = 'batting';
// }
// //class decorator
// @changeSkill
// class player {
//     skill;
// }

// var myPlayer = new player();
// console.log(myPlayer.skill);

//parametrized class decorator

function changeSkill(skill?) {
    return function(target){
        target.prototype.skill = skill || 'batting';        
    }
}
//class decorator
@changeSkill()
class player {
    skill;
}

var myPlayer = new player();
console.log(myPlayer.skill);

//class decorator
//property decorator
//method decorator
//parameter decorator

var abcde = ()=>{}