// Article Promise
// Topic , Promise has three status, pending/ reject/ resolve(full filled),Tips it has two callbacks, resolve and reject

const p = new Promise((resolve, reject) => {
    resolve('oh yeah');
});

const p1 = new Promise((resolve, reject) => {
    resolve('oh yeah p1');
});

// Topic promise chain, then(result=> (result * 4) ,("not number") ) it return a new promise
// Tips after then , return two functions, success call back and failed call back

const p3 = new Promise((resolve, reject) => {
    resolve(1);
});

p3.then(result => {
    return result * 2;
})
    .then(result => {
        return result * 4;
    })
    .then(finalResult => {
        console.log(finalResult);
    });

// Tips Promise all will return all messages from resolve
Promise.all([p, p1]).then(message => {
    console.log('promise all', message);
});

// Tips Promise race will return only the first message from resolve

Promise.race([p, p1]).then(message => {
    console.log('promise race', message);
});

Promise.prototype.finally = cb => {
    return this.then(
        value => Promise.resolve(cb()).then(() => value),
        reason =>
            Promise.resolve(cb()).then(() => {
                throw reason;
            })
    );
};

// Topic Promise.resolve(value), return depends on value

const p = new Promise((resolve, reject) => {
    resolve(20);
});

// if val is promise, return it self
const p2 = Promise.resolve(p);

console.log(p2 === p);
p2.then(msg => console.log(msg));

// if val is object return a promise state is fulfilled and with its fulfilled value as itself
const p3 = Promise.resolve([1, 2, 3]);

p3.then(msg => {
    console.log(msg);
});

// if val is thenable, run then and return its promise

const p4 = new Promise((resolve, reject) => {
    resolve(40);
}).then(val => console.log(val));

const p5 = Promise.resolve(p4);

console.log('p4 === p5 ', p5 === p4);

// Topic advantages 1, callback hell 2, catch, 3 capability 4, provide same api
// Topic drawbacks 1, cannot cancel a promise 2, if no callback, the exception will be inside.
// 3 if pending,can't know if is just start or during
