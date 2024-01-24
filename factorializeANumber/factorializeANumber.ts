export function factorializeANumber(num: number): number {
    let output = 0;
    let totalProduct = 1;

    for(let i = 1; i <= num; i++){
        totalProduct = totalProduct * (i)
       console.log(totalProduct);


    }

    output = totalProduct;

    return output;

}
console.log(factorializeANumber(3));
// 1 * 2 * 3
// 2  * 3 = 6
// 3 
console.log(factorializeANumber(5));
console.log(factorializeANumber(10));