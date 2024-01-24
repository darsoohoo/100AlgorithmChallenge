export function bishopAndPawn(bishop: string, pawn: string): boolean {
    /// CANN bishop eat the pawn in one more move?
    // MUST MEET CRITERIA - 
    //  1. for each letter that pawn is greater than bishop, it needs to be only 1 greater than bishop
    // 2. or for each letter than pawn is less than bishop, it needs to be only 1 less than bishop
    // otherwise, the answer is false ;
    // The numbers away from bishop has to be equal to the letters away from bishop, if so, then true
    let output = true;

    let numbersGreaterThanBishop = 0;
    let lettersGreaterThanBishop = 0;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    function getIndexOfAlphabet(letter){
        let index = 0;
        for(let i = 0; i < alphabet.length; i++){
            if(letter === alphabet[i]){
                index = i;
                break;
            }
        }
        return index;
    }

    // figure out what numbers greatr than bishop is
    // figure out what letters greater than biship is

    numbersGreaterThanBishop = Number(bishop.substring(1, 2)) - Number(pawn.substring(1,2)); console.log(numbersGreaterThanBishop);
    lettersGreaterThanBishop = Number(getIndexOfAlphabet(bishop.substring(0, 1))) - Number(getIndexOfAlphabet(pawn.substring(0, 1))) ;console.log(lettersGreaterThanBishop)

    
    return numbersGreaterThanBishop === lettersGreaterThanBishop;
}

console.log(bishopAndPawn('a1', 'c3'));