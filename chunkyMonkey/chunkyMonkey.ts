export function chunkyMonkey(arr: any[], size: number): any[][] {
    // create variable for maxNumOfElmsInArray
    // create variable for curNumOfArrays
    // create variable for numOfElemsInFirstArray
    let output: any[][] = [];
    let numOfArrays = 0
    let maxNumOfElmsInArray = size;
    let curNumOfElmsInArray = 0;

    // split output into two arrays
    for(let i = 0; i < 2; i++ ){
        output.push([])
    }

    // for each letter, push to first array until the length reaches maxNumOfElmsInArray
    // then push to second array
    for(let i = 0; i < arr.length; i++) {
        console.log(output[0].length)
        console.log(output[0])
        if(output[0].length < maxNumOfElmsInArray){
            output[0].push(arr[i])
        } else {
            output[1].push(arr[i])
        }
    }

console.log(output)

    return output;
}

 console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));