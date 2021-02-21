//recursion : functions call it self

function checkOdd(args: number[]): boolean {
    let result = false;
    if (!args.length) {
        console.log('all even');
        return false;
    } else {
        let eleNum = args[0];
        if (eleNum % 2 === 0) {
            args.shift();
            return checkOdd(args);
        } else {
            console.log(`${eleNum} is not odd`);
            return true;
        }
    }
}

console.log(checkOdd([2, 2, 2, 4]));
