export function almostIncreasingSequence(sequence: number[]): boolean {
    // boolIncreasing = true
    // loop through array
    // get current number, check if next number or next next number is greater, if it is then its okay, if it isnt, then boolincreasing is false
    let isIncreasing = true;
    let results:boolean[] = []
    for(let i = 0; i < sequence.length - 2; i++) {
        let currentNum = sequence[i]; console.log(currentNum)
        let nextNum = sequence[i+1]; console.log(nextNum)
        let nextNextNum = sequence[i+2]; console.log(nextNextNum);

        if(currentNum < nextNum || currentNum < nextNextNum){
            results.push(true)
        } else {
            results.push(false)
        }
    }
    console.log(results)

    const finalResult = results.filter((item) => {
      return item === false;
    })
    console.log(finalResult)
    return finalResult.length === 0

}

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 