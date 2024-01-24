export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
let output: number[] = []
    console.log(inputArray)
    console.log(elemToReplace)
    console.log(substitutionElem)

    // join array of numbers into one long string
    // replace elemToReplace  with subsituteElem
    // split the string

    // final output should be [3, 2, 3]

    const stringOfNumbers = inputArray.join(''); console.log(stringOfNumbers)
    let updatedStringOfNumbers = stringOfNumbers

    const replaceNumbers = ()=> {   
        updatedStringOfNumbers = updatedStringOfNumbers.replace(elemToReplace.toString(), substitutionElem.toString()); console.log(updatedStringOfNumbers)
    }


   let amountOfNumbersToReplace = inputArray.filter((char) => {
    return char === elemToReplace;
   }).length;
   console.log(amountOfNumbersToReplace)

   for(let i = 0; i < amountOfNumbersToReplace; i++){
    console.log(updatedStringOfNumbers)
    replaceNumbers()
    console.log(updatedStringOfNumbers)
   }

    console.log(updatedStringOfNumbers)
   


return output;
}

 console.log(arrayReplace([1, 2, 1], 1, 3));