// Article flat, distinct and sort

var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

Array.prototype.flat = function () {
    return [].concat(
        ...this.map(val => {
            if (Array.isArray(val)) {
                return val.flat();
            } else {
                return [val];
            }
        })
    );
};

// Array.prototype.distinct = function () {
//     return Array.from(new Set(this));
// };

// Array.prototype.distinct = function () {
//     let result = [];

//     this.forEach(val => {
//         if (result.indexOf(val) === -1) result.push(val);
//     });

//     return result;
// };

Array.prototype.distinct = function () {
    let map = new Map();
    let result = [];

    this.forEach((val, index) => {
        if (!map.has(val)) {
            map.set(val, index);
            result.push(val);
        }
    });

    return result;
};

Array.prototype.sortNum = function () {
    return this.sort((a, b) => a - b);
};

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(arr.flat().distinct().sortNum());
