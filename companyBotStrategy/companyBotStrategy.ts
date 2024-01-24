export function companyBotStrategy(trainingData: number[][]): number {
    // get the sum of all scores
    // step 1: loop through arrays, if 2nd element of array equals 1, add first element of array to sum and increment count by 1
    // divide sum by count to get score
    
    let sum = 0;
    let count = 0;

    trainingData.forEach((array) => {
        if(array[1] === 1) {
            sum += array[0];
            count++
        }
    })

    return sum/count;

}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
