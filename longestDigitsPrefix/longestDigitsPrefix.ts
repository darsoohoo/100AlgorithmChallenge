export function longestDigitsPrefix(inputString: string): string {
    // loop through string
    // for each letter, convert it to a number, if NaN, then get index of that character and set it to a variable called indexOflastNumber
    // splice the string from 0 to 
    let output = "";

    let indexOfFirstLetter = 0;
    let index = 0;
    for(const char of inputString) {
        console.log(char);
        console.log(index);
        let convertToNumber = Number(char); console.log(convertToNumber)
        if(!isNaN(convertToNumber)) {
   
            index++
        } else {
            indexOfFirstLetter = index;
            console.log(indexOfFirstLetter)
            break;
        }
     
    }
    console.log(indexOfFirstLetter)
    output = inputString.slice(0,indexOfFirstLetter);
    




    return output;

}

 console.log(longestDigitsPrefix('123aa1'));