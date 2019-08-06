let obj2 = {

    os: 'android',

    val: 45,

    fn: () => console.log(`This is object`)

};cb;

console.log(`Os is ${obj2.os}`);

obj2.fn();

console.log(`Val is ${obj2['val']}`);

function cb(dt) {

    console.log(`Speed is ${dt['speed']}`);

    console.log(`Speed is ${dt}`);

    dt['speed'] = 40;

}

function cbProper(cr) {

    console.log(`Name is ${cr.crWt}`);

}

cb(() => console.log('hi'));

// cbProper(null)
