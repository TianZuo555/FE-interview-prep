let obj = { name: 'tony' };

function Child(name) {
    this.name = name;
}

Child.prototype = {
    constructor: Child,
    showName: function () {
        console.log(this.name);
    }
}
var child = new Child('thomas');
child.showName(); // thomas

//  call,apply,bind使用
child.showName.call(obj);
child.showName.apply(obj);
let bind = child.showName.bind(obj); // 返回一个函数
bind(); // tony


Function.prototype.fakeBind = function (obj) {
    return (...args) => {
        console.log(this)
        this.apply(obj, args)
    }
}

function f(arg) {
    console.log(this.a, arg)
}

// output: 3, 4
f.bind({ a: 3 })(4)

// output: 3, 4
f.fakeBind({ a: 3 })(4)