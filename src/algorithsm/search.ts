function linearSearch(arr: number[], num: number): number {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element === num) {
            return index;
        }
    }
    return -1;
}

// binary search only work on sorted arr
// 1 pick halfway point
// 2 check item is before or after
// continue
function binarySearch(sortedArr: number[], val: number): number {
    let arr = [...sortedArr];
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        const midVal = arr[middle];
        if (midVal > val) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    if (arr[middle] === val) return middle;

    return -1;
}

function naiveSearch(long: string, short: string): number {
    let counter = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(long[i + j]);

            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) counter++;
        }
    }

    return counter;
}

//TODO KMP and BF
function kmpSearch(long: string, short: string) {}
const lr = kmpSearch('google', 'lex');
