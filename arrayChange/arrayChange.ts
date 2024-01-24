export function arrayChange(inputArray: number[]): number {
    let output = 0;

    let lastNum = 0;
    let numOfMoves = 0;
    for(let i = 0; i < inputArray.length; i++) {
        console.log(numOfMoves)
        console.log(lastNum)
        console.log(inputArray[i])
        if(inputArray[i] < inputArray[i+1]){
            lastNum === inputArray[i]
        } else {
            lastNum === inputArray[i]
            numOfMoves++
        }
        
    }
    output = numOfMoves

    return output;

}

 console.log(arrayChange([1, 1, 1]));