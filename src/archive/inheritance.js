//Article Inheritance/ prototype and new
// Topic prototype
function Person() {}

Person.prototype.name = 'Tian';

let person = new Person();
let person2 = new Person();

person2.name = 'Zuo';

console.log(person.name);
console.log(person2.name);

// Tips Person --- constructor -> prototype <- person --- instance __proto__
// Tips Instance's __proto__ equal to its prototype

console.log(
    'Person.prototype === person.__proto__',
    Person.prototype === person.__proto__
);

// Tips Person === prototype constructor
console.log(
    'Person.prototype.constructor === Person',
    Person.prototype.constructor === Person
);

// Tips Object prototype = null

console.log('Object.prototype.__proto__', Object.prototype.__proto__); // null

//Topic Inheritance -- Es5 prototype vs Es6 new class

function animal() {
    console.log('im animal');
}

function dog() {
    animal.call(this);
}

dog.prototype = Object.create(animal.prototype);

dog.prototype.constructor = dog;

let dd = new dog();

dd;

//console.log(dog.prototype.constructor === dog);

// dog.prototype = Object.create(animal.prototype);
// dog.prototype.constructor = dog;

// 任何一个 prototype 对象都有一个 constructor 属性，指向它的构造函数
// 更重要的是，每一个实例也有一个 constructor 属性，默认调用 prototype 的 constructor 属性
