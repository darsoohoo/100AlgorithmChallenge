export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    const getIndexInAlphabet = (letter) => {
   
    let index=alphabet.indexOf(letter); console.log(index)
         return index+1;
    }

    const determineOddOrEven = (number) => {
        let output = "even";
        if(number % 2 === 0) {
            output = "even";
        } else {
            output = "odd";
        }
        return output;
    }
 
    let cell1_letter = determineOddOrEven((getIndexInAlphabet( cell1.substring(0,1) ))); console.log(cell1_letter);  
    let cell2_letter = determineOddOrEven((getIndexInAlphabet(cell2.substring(0, 1)))); console.log(cell2_letter);   


    let cell1_number = determineOddOrEven((cell1.substring(1))); console.log(cell1_number);   
    let cell2_number = determineOddOrEven((cell1.substring(1))); console.log(cell1_letter);   
    // is cell2_number odd or even?

    if((cell1_letter === cell2_letter) && (cell1_number === cell2_number)) {
        return true
    } else {
        return false
    }
   

}

 console.log(chessBoardCellColor('A1', 'C3'));
 console.log(chessBoardCellColor('A1', 'H3'));
