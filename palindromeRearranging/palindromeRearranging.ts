export function palindromeRearranging(inputString: string): boolean {
    // get a count of all of the different letters
    // determine if each letter has a matching pair
    let output = true;
let inputArray = inputString.split('')
// loop through array
// store the count for each letter

    let myStorage = {};
    inputArray.forEach((letter) => {
        if(myStorage[letter]) {
            myStorage[letter]++
        } else {
            myStorage[letter] = 1;
        }
    })
    console.log(myStorage)

    let howManyOddValues = 0;
    let howManyEvenValues = 0;

    for(const key in myStorage) {
        console.log(key);
        console.log(myStorage[key])
        if(myStorage[key] % 2 === 0) {
            howManyEvenValues++
        } else {
            howManyOddValues++
        }

    }
    console.log(howManyEvenValues)
    console.log(howManyOddValues)
    if(howManyOddValues  < 2 && howManyEvenValues > 1) {
        return true;
    }

    // determine if each key value has an even number
    // determin if there is no more than 1 odd number

    



    return output;

}

 console.log(palindromeRearranging('aabb'));