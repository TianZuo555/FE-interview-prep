// prototype

function Person() { }

Person.prototype.name = "Tian"

let person = new Person();
let person2 = new Person();
person2.name = "Zuo"
console.log(person.name)
console.log(person2.name)


// Person --- constructor -> prototype <- person --- instance __proto__
console.log(Person.prototype === person.__proto__)

// Person === prototype constructor 
console.log(Person.prototype.constructor === Person)

// object prototype = null

console.log(Object.prototype.__proto__) // null