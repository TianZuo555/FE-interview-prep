//recursion : functions call it self
// three problems 1, no base, 2 not return, 3 not changing for input params
function factorial(num: number): number {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// design pattern -- helper recursion

// collect odd numbers in arr

function collectOddNumber(arr: number[]): number[] {
    let result: number[] = [];

    (function helper(inputArr: number[]): void {
        if (inputArr.length) {
            if (inputArr[0] % 2 === 1) {
                result.push(inputArr[0]);
            }

            inputArr = inputArr.slice(1);

            return helper(inputArr);
        } else {
            return;
        }
    })(arr);

    return result;
}

function collectOddNumberPure(arr: number[]): number[] {
    let newArr: number[] = [];

    if (!arr.length) return [];

    if (arr[0] % 2 === 1) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddNumberPure(arr.slice(1)));
    return newArr;
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(baseNumber: number, powerNum: number): number {
    if (powerNum === 0) {
        return 1;
    } else {
        return baseNumber * power(baseNumber, powerNum - 1);
    }
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArr(arr: number[]): number {
    if (!arr.length) {
        return 1;
    } else {
        return arr[0] * productOfArr(arr.slice(1));
    }
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(number: number): number {
    if (number <= 2) {
        return 1;
    } else {
        return fib(number - 1) + fib(number - 2);
    }
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(words: string) {
    let result = true;

    function helper(helperWords: String) {
        if (helperWords.length === 1) {
            return;
        } else {
            if (helperWords[0] === helperWords[helperWords.length - 1]) {
                result = true;
            } else {
                result = false;
            }
            helper(helperWords.slice(1, helperWords.length - 2));
        }
    }

    return result;
    // add whatever parameters you deem necessary - good luck!
}

const isOdd = (val: number) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr: number[], fn: (para: number) => boolean): boolean {
    if (!arr.length) {
        return false;
    } else {
        if (fn(arr[0])) {
            return true;
        } else {
            return someRecursive(arr.slice(1), fn);
        }
    }
}

let gr = someRecursive([1, 2, 3, 4], isOdd); // true
