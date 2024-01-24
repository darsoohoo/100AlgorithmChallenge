export function alphabeticShift(inputString: string): string {
    // create alphabetstring
    // create output variable
    // create helper function to returns the nxt letter in the alpha
    // loop through each char of inputsring, append the returned value of the helper function to the output variable

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let output = "";

    const getNextLetter = (letter) => {
      const indexOfLetter = alphabet.indexOf(letter) 
      const nextLetter = alphabet[indexOfLetter+1]
      return letter === "z" ? "a" : nextLetter;
    }
   
    for(let i = 0; i < inputString.length; i++) {
       output += getNextLetter(inputString[i])
    }

    return output

}

console.log(alphabeticShift('crazy'));