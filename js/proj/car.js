"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    // private nm: string
    function Car(weight, make) {
        this.weight = weight;
        this.make = make;
        // this.nm = nm
    }
    Object.defineProperty(Car.prototype, "crWt", {
        get: function () {
            return this.weight;
        },
        set: function (wt) {
            this.weight = wt;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.whoCreated = function () {
        return this.make;
    };
    Car.myStatic = function () {
    };
    return Car;
}());
exports.Car = Car;
function anyFn() {
    console.log(this);
}
var cr = new Car(56);
cr.crWt = 45;
var cr1 = new Car();
var cr2 = new Car(56, 89);
exports.color = 'red';
function blink() {
    return true;
}
exports.blink = blink;
var Os = /** @class */ (function () {
    function Os() {
    }
    Os.prototype.proceed = function () {
    };
    return Os;
}());
exports.Os = Os;
var IoTDevice = /** @class */ (function () {
    function IoTDevice() {
    }
    IoTDevice.prototype.onDataChanged = function (dt) {
        console.log(dt);
    };
    return IoTDevice;
}());
exports.IoTDevice = IoTDevice;
var sl = {
    onDataChanged: function (dt) {
    }
};
