export function seekAndDestroy(arr1: number[], arr2: number[]): any[] {

    return arr1.map((number) => {
        if (!arr2.join('').includes(number.toString())) {
            return number;
        }
    }).filter((item) => item !== undefined)

}

 console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
 console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));