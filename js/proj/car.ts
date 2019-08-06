import { SensorListener } from './interfaces';
export class Car {
    // private nm: string
    constructor(
        private weight?: number,
        private make?: number,
        // nm: string
    ) {
        // this.nm = nm
    }
    get crWt() {
        return this.weight
    }
    set crWt(wt  : number) {
       this.weight = wt
    }
    whoCreated(): number {
        return this.make;
    }
    static myStatic() {
    }

}
function anyFn() {
    console.log(this)
}
let cr = new Car(56)
cr.crWt = 45
let cr1 = new Car()
let cr2 = new Car( 56,89)

export let color: string = 'red'

export function blink(): boolean {

    return true
}

export abstract class Os {

    abstract algo(): void

    proceed() {
    }
}

export class IoTDevice implements SensorListener {

    onDataChanged(dt: number): void {

        console.log(dt)
    }
}

let sl: SensorListener = {
    onDataChanged(dt: number) {
    }
}