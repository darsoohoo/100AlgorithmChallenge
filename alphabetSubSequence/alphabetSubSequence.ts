export function alphabetSubsequence(s: string): boolean {
const alphabet = "abcdefghijklmnopqrstuvwxyz"
let indexInAlphabet = 0;

const getIndex = (letter) => {
    return alphabet.indexOf(letter);
}
let isSubsequence = true
let lastAlphabetIndex = 0;
for(let i = 0; i < s.length; i++){
    if(getIndex(s[i]) >= lastAlphabetIndex ){
        lastAlphabetIndex = getIndex(s[i]);


        
    } else {
        isSubsequence = false
    }


    // is this character repeated?
    let isRepeated = false;
    let currentLetter = ""
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        currentLetter = s[i]
        if (currentLetter === s[i-1]) {
            isRepeated = true;
            console.log(isRepeated)
          if(isRepeated === true){
            return false;
          }
        };
    }

}



return isSubsequence;



}

 console.log(alphabetSubsequence('zab'))
 console.log(alphabetSubsequence('effg'))
  console.log(alphabetSubsequence('cdce'))
  console.log(alphabetSubsequence('ace'))
  console.log(alphabetSubsequence('bxz'))
