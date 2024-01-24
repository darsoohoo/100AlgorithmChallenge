export function arrayConversion(inputArray: number[]): number {
    let finalOutput = 0
    let finalArray: number[] = [];
    let lengthOfFinalArray = finalArray.length; console.log(lengthOfFinalArray)
    let stageArray = inputArray;
    let lengthOfArray = inputArray.length; console.log(lengthOfArray)


    let add = true
    while (stageArray.length > 1) {
 
        let combinedArray: number[] = []
        let sum = 0
        for (let i = 0; i < stageArray.length; i += 2) {

            // odd is add, even is multiply
            const firstNum = stageArray[i]; console.log(firstNum)
            const secondNum = stageArray[i + 1]; console.log(secondNum)

            if (add === true) {
                sum = firstNum + secondNum; console.log(sum)
                combinedArray.push(sum); console.log(combinedArray)
            } else {
                sum = firstNum * secondNum; console.log(sum)
                combinedArray.push(sum); console.log(combinedArray)
            }


        }

        if (add === true) {
            add = false
        } else {
            add = true
        }

        console.log(combinedArray)
        stageArray = combinedArray;
        combinedArray = []
    }

    finalArray = stageArray;
    finalOutput = finalArray[0]

    return finalOutput


}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8,]));
