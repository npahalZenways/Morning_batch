var num : number;
var str : string;
var strArray: string[];
var numArray : number[];
var isTrrue : boolean;
var notDefine : undefined;
var randomVar : any = 12345;
const pi = 3.14;
randomVar = 12345;
randomVar = 'dfghj';
randomVar = [];

var jsArray: any[];
jsArray = [1, '', true, [], {}]

//tuple

var myTuple : [number, string];

myTuple = [1, '', '', 1, 1, 1, 1];

enum myobjects {tea = 10, coffee= 9, milk};

let objOfMyobj = myobjects.tea;
let myobjstr = myobjects[10];

// console.log(objOfMyobj, myobjstr)

function abcFunction(name: number) :void{
    asd = 3;
    console.log(name, asd)    
}
abcFunction(asd);

var asd:number = 1;
abcFunction(1);
console.log('asd: ', asd);
