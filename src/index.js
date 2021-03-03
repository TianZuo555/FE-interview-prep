const { finishedTask } = require('./finished');

const remain = Array(161)
    .fill(null)
    .map((_, i) => i + 1)
    .filter(val => !finishedTask.includes(val));

// console.log(remain);

var arr = [1, 1, 1, 1, 1, 23, 12, 3, 12, 3, 3123];

Array.prototype.distinct = function () {
    let map = {};
    let result = [];

    for (let i = 0; i < this.length; i++) {
        const val = this[i];
        map[val] = map[val] ? map[val] + 1 : 1;
        if (map[val] === 1) result.push(val);
    }

    return result;
};

console.log(arr.distinct());
