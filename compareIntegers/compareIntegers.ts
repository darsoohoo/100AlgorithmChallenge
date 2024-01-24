export function compareIntegers(a: string, b: string): string {

    const aNum = Number(a)
    const bNum = Number(b)

    if(aNum < bNum) {
        return "less"
    }
    if (aNum > bNum) {
        return "greater"
    }
    if (aNum === bNum) {
        return "equal"
    }


}

 console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));