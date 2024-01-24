export function boxBlur(image: number[][]): number[][] {
    // get sum of all elements in array
    // divide by length of array
    // divide again by length of array
    let output: any = []
    let sum = 0;
    let numberOfnumbers = 0
    image.forEach((array) => {
        array.forEach((number) => {
            sum += number;
            numberOfnumbers++
        })
    })
    console.log(sum);
    console.log(numberOfnumbers);
    let finalNumber = Math.floor(sum / numberOfnumbers); console.log(finalNumber)
    output = [[finalNumber]]

    return output;

}

console.log(boxBlur([[1, 1, 1],
[1, 7, 1],
[1, 1, 1]]));