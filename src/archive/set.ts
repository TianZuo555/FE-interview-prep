// Article Set Map, weakMap weakSet

// Topic Set
function setFuc() {
    let s = new Set() as Set<number>;

    [1, 2, 1, 1, 1, 1, 1, 1].forEach((item) => {
        s.add(item);
    });

    console.log(Array.from(s));
    console.log([...s]);
}

function twoSetsImpl() {
    let set1 = new Set([1, 2, 3]);
    let set2 = new Set([4, 3, 2]);

    // Tips same as array
    let intersect = new Set([...set1].filter((value) => set2.has(value)));
    let union = new Set([...set1, ...set2]);
    let difference = new Set([...set1].filter((value) => !set2.has(value)));

    console.log('intersect', intersect);
    console.log('union', union);
    console.log('difference', difference);
}

// Tips WeakSets are collections of objects only.If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.

// Topic Map

function mapFunc() {
    let map = new Map();
    map.set(1, 'test');
    map.set(2, 'test1');
    map.set(3, 'test2');

    for (const [key, value] of map) {
        console.log(key, value);
    }
}

mapFunc();

// Topic weakMap
// Tips Keys of WeakMaps are of the type Object only(except null). Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key).
