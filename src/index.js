function _new(fn, ...args) {
    let obj = Object.create(fn.prototype);
    let ret = fn.apply(obj, args);
    return ret instanceof Object ? ret : obj;
}

console.log(_new(null));
