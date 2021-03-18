// 1 copy object
function clone1(obj) {
    if (typeof obj === 'object' && obj !== null) {
        let newObj = {};
        for (const key in obj) {
            newObj[key] = clone(obj[key]);
        }
        return newObj;
    } else {
        return obj;
    }
}

// 2 support array
function clone2(obj) {
    if (typeof obj === 'object' && obj !== null) {
        let newObj = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            newObj[key] = clone2(obj[key]);
        }

        return newObj;
    } else {
        return obj;
    }
}

// 3 support object contains itself
function clone3(obj, map = new Map()) {
    if (typeof obj === 'object') {
        let newObj = Array.isArray(obj) ? [] : {};

        if (map.get(obj)) {
            return map.get(obj);
        }

        map.set(obj, newObj);

        for (const key in obj) {
            newObj[key] = clone3(obj[key], map);
        }

        return newObj;
    } else {
        return obj;
    }
}

// deep clone a function
function cloneFunc(func) {
    var newfunc;
    eval('newfunc=' + func.toString());
    for (var key in func) {
        newfunc[key] = func[key];
    }
    return newfunc;
}

function getType(obj) {
    return Object.prototype.toString.call(obj);
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getInit(obj) {
    const Ctor = obj.constructor;
    return new Ctor();
}

//4  add support to set and map

function clone4(obj, map = new Map()) {
    if (!isObject(obj)) return obj;

    let newObj = getInit(obj);

    if (map.has(obj)) {
        return map.get(obj);
    } else {
        map.set(obj, newObj);
    }

    if (getType(obj) === '[object Function]') {
        return cloneFunc(obj);
    }

    if (getType(obj) === '[object Set]') {
        obj.forEach(val => {
            newObj.add(clone4(val, map));
        });

        return newObj;
    }

    if (getType(obj) === '[object Map]') {
        obj.forEach((val, key) => {
            newObj.set(key, clone4(val, map));
        });

        return newObj;
    }

    if (typeof obj === 'object') {
        for (const key in obj) {
            newObj[key] = clone4(obj[key], map);
        }

        return newObj;
    }
}

let result = {
    1: 'test',
    str: 'asds',
    obj: { 222: 333 },
    arr: [1, 23, 3, 3213],
    set: new Set(),
    map: new Map(),
};
result.map.set('123', 123);
result.set.add(1);
result['self'] = result;
result['fuc'] = () => {
    console.log(123);
};

console.log(clone4(result));
