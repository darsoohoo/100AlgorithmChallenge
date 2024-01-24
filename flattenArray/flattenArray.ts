import { isArrayTypeNode } from "typescript";

export function flattenArray(arr: any[]): any[] {
    let output: any[] = [];

    arr.forEach((item, index) => {
        const type = typeof(item); console.log(type)
        if(type === 'number'){
            console.log("item is a ", type )
            output.push(item)
        }
        if(type === 'object' ){
            console.log('item is an', type)
            const isAnArray = Array.isArray(item); console.log(isAnArray);
            if(isAnArray === true) {
                const newArray = [...item]; console.log(newArray)
            } else {
                
            }
        }
    })

    return output;
    
}
   

// console.log(flattenArray([[["a"]], [["b"]]]));
 console.log(flattenArray([1, [2], [3, [[4]]]]))
