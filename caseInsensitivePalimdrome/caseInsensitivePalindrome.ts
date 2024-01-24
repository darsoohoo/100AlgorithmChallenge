export function isCaseInsensitivePalindrome(inputString: string): boolean {
    let output = true;
    // make all inputstring lowercase, store value in a varaible string1
    // split the inputstirng into an array and reverse it
    // convert array back into a string and store in second bariable string2
// if string1 and string2 are equal then, true, ele false

    let string1 = inputString.toLowerCase(); console.log(string1);
    let string2 = inputString.toLowerCase().split('').reverse().join(''); console.log(string2)

    output = string1 === string2;

    return output;

}

 console.log(isCaseInsensitivePalindrome('AaBaa'));
 console.log(isCaseInsensitivePalindrome('abac'));