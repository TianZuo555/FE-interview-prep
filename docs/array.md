#### Flatten an array (recursive)

```javascript
Array.prototype.flat = function () {
    // hint, ...[[1]] === [1], so it can use concat
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
```

#### Flatten an array (loop)

```javascript
Array.prototype.flat = function () {
    let result = [...this];
    while (result.some(item => Array.isArray(item))) {
        result = [].concat(...result);
    }
    return result;
};
```

#### Distinct 

```javascript
Array.prototype.distinct = function () {
    return [...new Set(this)];
};

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
```

