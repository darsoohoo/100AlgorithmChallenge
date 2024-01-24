export function absoluteValuesSumMinimization(a: number[]): number {
    const sortedArray = a.sort((a, b) => a - b);

    let minSum = Infinity;
    let minX = 0;

    for (let i = 0; i < sortedArray.length; i++) {
        let sum = 0;

        for (let j = 0; j < sortedArray.length; j++) {
            sum += Math.abs(sortedArray[j] - sortedArray[i]);
        }

        if (sum < minSum) {
            minSum = sum;
            minX = sortedArray[i];
        }
    }

    return minX;
}


// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
