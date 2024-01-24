export function areSimilar(a: number[], b: number[]): boolean {
    let output = true;
    let numOfSwaps = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            numOfSwaps++
        } 
        if(numOfSwaps > 2){
            return false
        }
    } 

  


    return output;
}

 console.log(areSimilar([1, 2, 3], [1, 2, 3]));
 console.log(areSimilar([1, 2, 3], [2, 1, 3]));
 console.log(areSimilar([1, 2, 2], [2, 1, 1]));
