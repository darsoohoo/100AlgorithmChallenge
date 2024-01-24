export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    
    // create variable tp store current sum
    // create variable for largest sum
    // loop through array, then create nested forloop where j < k and j++ increment the currentSum by inputarray[i+j] by the 
    // if current sum greater than largest sum, set largest sum equal to current sum


    
    let output = 0;
  
    let largestSum = 0;

    for(let i = 0; i < inputArray.length; i++) {
        let currentSum = 0;
        for(let j = 0; j < k; j++){
            currentSum = inputArray[i+j]
        }

        if(currentSum > largestSum) {
            largestSum = currentSum;
        }
    }

    output = largestSum;



    return output;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));