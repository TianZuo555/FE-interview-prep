function* g1(params) {
    console.log("hello");
    yield 'y1';
    console.log("hello 2")
    yield 'y2';

    return 'return'
}

function* g2() {
    yield 'g2 y1';
    yield* g1();
    yield 'g2 y2';
}

const g = g2();

function* fibonacci() {
    let [prev, curr] = [0, 1]
    // (;; equal while true)
    for (; ;) {
        [prev, curr] = [curr, prev + curr]
        // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
        yield curr
    }
}

for (const iterator of fibonacci()) {
    if (iterator > 100)
        break;
    display(iterator)
}





// import display from './utils/display.js';

// const dotRegex = /.a/;

// display("test dot", dotRegex.toString(), dotRegex.test("abc"));

// const numArr = [1, 2, 3, 4, 5];

// console.log(...numArr)

// display(...numArr)