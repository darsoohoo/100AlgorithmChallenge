export function addTwoDigits(n: any): number {

    const nstring = n.toString()
    return Number(nstring[0]) + Number(nstring[1])
}

 console.log(addTwoDigits(29));