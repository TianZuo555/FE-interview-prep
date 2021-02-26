//Article: all about sort --- bubble, selection , insertion

// Topic 1: default js sort is based on uni code without callback fn, fn (a,b) =>{ -1 | 1}, if -1 ab will be advanced, if > 0 b will be advanced

[123, 3, 3, 3, 3, 4].sort((a, b) => {
    return a - b;
});

// Topic 2: bubble sort
// Step 1: compare with element after, swap if larger/ lesser
// Step 2: redo

function swap(arr: number[], index1: number, index2: number) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function bubbleSort(arr: number[]): number[] {
    let result = [...arr];

    for (let i = result.length; i > 0; i--) {
        let swapped = false;

        for (let j = 0; j < i - j; j++) {
            swapped = false;
            const val = result[j];
            const nextVal = result[j + 1];

            if (val > nextVal) {
                swap(result, j, j + 1);
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return result;
}

// Topic 3: selection sort
// Step 1 find min value
// Step 2 put min to first

function selectionSort(arr: number[]): number[] {
    let result = [...arr];

    for (let i = 0; i < result.length; i++) {
        let min = i;
        for (let j = i + 1; j < result.length; j++) {
            if (result[min] > result[j]) {
                min = j;
            }
        }

        if (result[i] !== result[min]) swap(result, min, i);
    }

    return result;
}

// Topic 4: insertion sort
// Step 1: compare with left element
// Step 2: continue and find the place

function insertionSort(arr: number[]): number[] {
    let result = [...arr];

    for (let i = 1; i < result.length; i++) {
        const val = result[i];

        for (var j = i - 1; j >= 0; j--) {
            console.log('start:', result, i, j);

            if (val < result[j]) continue;

            console.log('swap');
            result[j + 1] = result[j];
        }
        result[j + 1] = val;

        console.log('result: ', result, i, j);
    }

    return result;
}

console.log(insertionSort([37, 12, 39, 22, 50]));
