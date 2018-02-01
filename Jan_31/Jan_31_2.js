"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper(name) {
        this.nametag = name;
    }
    return ZooKeeper;
}());
var k = new ZooKeeper('nitin');
var k1 = new ZooKeeper('hello');
var Animal = /** @class */ (function () {
    function Animal(num) {
        this.numLegs = num;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion(keeper) {
        var _this = _super.call(this, 5) || this;
        _this.keeper = keeper;
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c(ZooKeeper);
}
var c1 = createInstance(Lion).keeper; // typechecks!
// var c2 = createInstance(Bee).keeper.hasMask;   // typechecks!
console.log(c1);
//----------------------------------------------------------------------------
var m1;
(function (m1) {
    var myClass1 = /** @class */ (function () {
        function myClass1(name) {
        }
        myClass1.prototype.getInfo = function () {
            return '';
        };
        return myClass1;
    }());
    m1.myClass1 = myClass1;
})(m1 = exports.m1 || (exports.m1 = {}));
var ins = new m1.myClass1('nitin');
