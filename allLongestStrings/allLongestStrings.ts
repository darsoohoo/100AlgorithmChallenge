export function allLongestStrings(inputArray: string[]): string[] {
    // find the length of the longest string

    // add all string with the largest length to the largeststrings array

    let lengthOfLargestString = 0;

    inputArray.forEach((item) => {
        if(item.length > lengthOfLargestString) {
            lengthOfLargestString = item.length
        }
    })

    console.log(lengthOfLargestString)

    const arrayWithLongestStrings = inputArray.filter((item) => {
      return item.length === lengthOfLargestString
        
    })

    return arrayWithLongestStrings
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));