export class Car {
    // private nm: string
    constructor(weight, make) {
        this.weight = weight;
        this.make = make;
        // this.nm = nm
    }
    get crWt() {
        return this.weight;
    }
    set crWt(wt) {
        this.weight = wt;
    }
    whoCreated() {
        return this.make;
    }
    static myStatic() {
    }
}
function anyFn() {
    console.log(this);
}
let cr = new Car(56);
cr.crWt = 45;
let cr1 = new Car();
let cr2 = new Car(56, 89);
export let color = 'red';
export function blink() {
    return true;
}
export class Os {
    proceed() {
    }
}
export class IoTDevice {
    onDataChanged(dt) {
        console.log(dt);
    }
}
let sl = {
    onDataChanged(dt) {
    }
};
