// Topic combine two arr
const arr1 = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2 = ['A', 'B', 'C', 'D'];

const arr3 = arr1.concat(arr2);

// compare first char, if same -> compare length, if same , compare the second char
const result = arr3.sort(
    (a, b) =>
        a.codePointAt(0) - b.codePointAt(0) ||
        b.length - a.length ||
        b.codePointAt(1) - a.codePointAt(1)
);

for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (var i = 0; i < 10; i++) {
    (i =>
        setTimeout(() => {
            console.log(i);
        }, 1000))(i);
}

for (var i = 0; i < 10; i++) {
    setTimeout(
        i => {
            console.log(i);
        },
        1000,
        i
    );
}
var a = 10;

(function () {
    console.log(a);
    a = 5;
    console.log(window.a);
    var a = 20;
    console.log(a);
})();

undefine;
10;
20;

const sleep = time =>
    new Promise((resolve, reject) => setTimeout(resolve, time));

// sleep(5000).then(() => console.log(123));

async function sleepAsync() {
    await sleep(5000);
    console.log('5000');
}

function callBackSleep(fn, time) {
    setTimeout(fn, time);
}

callBackSleep(() => console.log(5000), 5000);

var obj = {
    2: 3,
    3: 4,
    length: 2,
    splice: Array.prototype.splice,
    push: Array.prototype.push,
};
obj.push(1);
obj.push(2);

/// Tips with length and splice, arr becomes a arr like object, when push, length+1 and add its value
console.log(obj);

// Tips array-like objects (objects with a length property and indexed elements)
let obj1 = { 1: 222, 2: 123, 5: 888 };
console.log(
    Array.from({ length: 12 }, (item, index) => obj1[index + 1] || null)
);
// Topic joint two arr

const arr1 = [1, 1, 1, 2, 3, 4, 5, 1, 999];
const arr2 = [3, 5, 9, 2, 19, 34, 1, 1, 1];

function joinTwoArr(a1, a2) {
    let dic = {};
    let result = [];

    for (let i = 0; i < a1.length; i++) {
        const val1 = a1[i];
        dic[val1] = dic[val1] ? dic[val1] + 1 : 1;
    }

    for (let j = 0; j < a2.length; j++) {
        const val2 = a2[j];
        if (dic[val2] && dic[val2] > 0) {
            dic[val2] = dic[val2] - 1;
            result.push(val2);
        }
    }

    console.log(result);
}

// Topic assign value -- ref type, primitive type
var a = { n: 1 };
var b = a;
// b = {n:1}
a.x = a = { n: 2 };
//a.x = {n:2} -> a = {n:1,x:{n:2}} = b
//a = {n:2}
console.log(a.x);
console.log(b.x);
