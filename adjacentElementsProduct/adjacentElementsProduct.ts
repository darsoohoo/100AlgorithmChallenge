export function adjacentElementsProduct(inputArray: number[]): number {

    let arrayOfSums: number[] = []

    for(let i = 0; i < inputArray.length-1; i++) {
       
        let sumPair = inputArray[i] * inputArray[i+1]
        arrayOfSums.push(sumPair) 
    }
    console.log(arrayOfSums)
    
    return arrayOfSums[arrayOfSums.length-1]

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));