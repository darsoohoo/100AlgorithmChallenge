export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    // create a variable for largest  abs difference
    // create a variable for current  abs different
    // loop through array
    // if current abs difference largest than laargest abs difference, set largest abs difference to current abs difference

    let output = 0
    let largestAbsDiff = 0;
    let currentAbsDiff = 0;

    for (let i = 0; i < inputArray.length - 1; i++) {
        currentAbsDiff = Math.abs(inputArray[i] - inputArray[i + 1])
        console.log(currentAbsDiff)
        if (currentAbsDiff > largestAbsDiff) {
            largestAbsDiff = currentAbsDiff
        }
    }

    output = largestAbsDiff;

    return output;

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));