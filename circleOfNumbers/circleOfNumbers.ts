export function circleOfNumbers(n: number, firstNumber: number): number {
    // find out halfway point
    // add halfway point to first number
    let output = 0;

    let halfway = n / 2

    output = firstNumber + halfway;

    return output;
}

console.log(circleOfNumbers(10, 2));


//      0  1
//  10        2
// 9           3
// 8           4
//    7  6  5
//     