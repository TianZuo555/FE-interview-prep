const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

// 1 support sync func
class PromiseSync {
    constructor(func) {
        this.status = PENDING;
        this.value = undefined;
        this.errMsg = undefined;

        const resolve = val => {
            this.status = FULFILLED;
            this.value = val;
        };

        const reject = msg => {
            this.status = REJECTED;
            this.errMsg = msg;
        };

        try {
            func(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
            onRejected(this.reason);
        }
    }
}

// support async
class PromiseAsync {
    constructor(func) {
        this.status = PENDING;
        this.value = undefined;
        this.errMsg = undefined;

        this.onResolvedCallbacks = [];

        this.onRejectedCallbacks = [];

        const resolve = val => {
            this.status = FULFILLED;
            this.value = val;
            this.onResolvedCallbacks.forEach(func => func());
        };

        const reject = val => {
            this.status = REJECTED;
            this.errMsg = val;
            this.onRejectedCallbacks.forEach(func => func());
        };

        try {
            func(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.errMsg);
        }

        if (this.status === PENDING) {
            this.onResolvedCallbacks.push(() => {
                onFulfilled(this.value);
            });

            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}

const promise = new PromiseAsync((resolve, reject) => {
    setTimeout(() => {
        resolve('yeah');
    }, 1000);
}).then(
    data => {
        console.log('success', data);
    },
    err => {
        console.log('faild', err);
    }
);
