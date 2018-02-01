"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { m1 } from "./Jan_31_2";
var file_two = require("./Jan_31_2");
//Unions
function returnPadding(paddingValue) {
    if (typeof paddingValue == 'number') {
        return paddingValue + 'px';
    }
    else {
        return paddingValue;
    }
}
console.log(returnPadding(10)); // returns 10px;
console.log(returnPadding('20px')); //returns 20px;
// console.log(returnPadding(true)) //retrun true;
//generics
function random(params) {
    return params;
}
random(1);
random('');
var strArray;
var myClass = /** @class */ (function () {
    function myClass(parameters) {
    }
    myClass.prototype.getName = function () { };
    return myClass;
}());
var classArray = [{ name: 'hello', getName: function () {
        } }];
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
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
function changeSkill(skill) {
    return function (target) {
        target.prototype.skill = skill || 'batting';
    };
}
//class decorator
var player = /** @class */ (function () {
    function player() {
    }
    player = __decorate([
        changeSkill()
    ], player);
    return player;
}());
var myPlayer = new player();
console.log(myPlayer.skill);
//class decorator
//property decorator
//method decorator
//parameter decorator
var abcde = function () { };
