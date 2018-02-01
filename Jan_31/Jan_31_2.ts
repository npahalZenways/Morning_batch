class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
    constructor(name){
        this.nametag = name;
    }
}
var k: ZooKeeper = new ZooKeeper('nitin');
var k1 : ZooKeeper = new ZooKeeper('hello');
class Animal {
    numLegs: number;
    constructor(num){
        this.numLegs = num;
    }
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
    constructor(keeper: ZooKeeper){
        super(5);
        this.keeper = keeper;
    }
}

function createInstance<A extends Animal>(c: new (ZooKeeper) => A): A {
    return new c(ZooKeeper);
}

var c1 = createInstance(Lion).keeper;  // typechecks!
// var c2 = createInstance(Bee).keeper.hasMask;   // typechecks!
console.log(c1)



//----------------------------------------------------------------------------


export module m1{
    interface myRules {
        name: string;
        rollID: number;
        getInfo(): string;
    }

    export class myClass1 implements myRules {
        name;
        rollID;
        getInfo() {
            return '';
        }
        constructor(name) {

        }
    }
}

var ins = new m1.myClass1('nitin');
