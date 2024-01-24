export function checkPalindrome(inputString: string): boolean {
    let string1 = inputString;
    let string2 = inputString.split('').reverse().join('');

    return string1 === string2;

}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
