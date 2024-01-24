export function characterParity(symbol: string): string {
    // check if symbol can be converted into a number, if so, check if its odd or even
    // if it cant convert to number, return "not a digit"
    let output = "";

    let number = ( Number(symbol)); console.log(number)
    if(isNaN(number)){
        output = "not a digit";
    } else {

       
        if(number % 2 === 0) {
            output = "true";
        } else {
            output = "false"
        }
        
    }

    

    return output;


}

 console.log(characterParity('5'))
 console.log(characterParity('8'))
 console.log(characterParity('q'))
