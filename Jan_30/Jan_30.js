//constants

const ownerName = 'nitin';

//rest parameters

function abc(...b) {
    // console.log(b);
}

abc(1,2,3,4,5,6,7,8,9,0);

//spread

var arr = [1,2,3,4,5,6];

var arr2 = [arr, 0, 9];

// console.log(arr2)

function bcd(...array){
    // console.log(array)
}
bcd(0,9, ...arr);

//destructuring

var [first, ,third, ...arr3] = arr;

// console.log(first, third, arr3);


//arrow functions

// var printFunction = function(param){
//  console.log('This is print function', param); 
//}

var printFunction = param => console.log('This is print function', param);

printFunction(12345);

//scope

if(true){
    var abcde = 10;
    let localVar = 'Local variable';
}

// console.log(localVar);

//multi-line string

var str = `
    Hello this is a multi-line string

    I'm an new line
`

// console.log(str)

//string interpolation

// console.log(`First ele is: ${first} third ele is: ${third}`);

//property shorthand

var obj = {
    first, third
}

// console.log(obj)

class student{
    
    constructor(name){
        this.studentName = name;
    }

    getName(){
        return this.studentName;
    }
}

var nitin = new student('Nitin');

console.log(nitin.getName());

// module.exports = student;