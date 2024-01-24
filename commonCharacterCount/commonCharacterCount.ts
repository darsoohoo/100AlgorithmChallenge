export function commonCharacterCount(s1: string, s2: string): number {
    // we need to find out how many matches there are from s1 to s2
    // create a map to keep track of matches
    
    //steps: create map for s1 and s2 that keeps track of how many times letters appear, create helper function
    // loop through maps and get lesser value of letters that has matches

    const getCharCount = (letters) => {
        let myStorage = {};

        for(let i = 0; i < letters.length; i++) {
            console.log(letters[i])
            if(myStorage[letters[i]] ) {
               myStorage[letters[i]]++ 
            } else {
                myStorage[letters[i]] = 1
            }
      
        }
        return myStorage;
      
    }

    const s1Chars = s1.split('');
    const s2Chars = s2.split('');

    const s1Count = getCharCount(s1Chars); console.log(s1Count)
    const s2Count = getCharCount(s2Chars); console.log(s2Count)

     let total = 0

    for(const key in s1Count) {
      
        console.log(key)
        console.log(s2Count[key])
        if(s2Count[key] < s1Count[key]) {
            total += s2Count[key]
        } else {
            total+= s1Count[key]
        }
        return total;
    }

 

    let output = total;

    return output;

}

 console.log(commonCharacterCount('aabcc', 'adcaa'));