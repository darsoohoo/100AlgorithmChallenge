export function launchSequenceChecker(systemNames: string[], stepNumbers: number[]): boolean {

    // create a storageMap to store the systemnames as key and the step numbers as values
    // loop through the storage map and its array of values to determine if each value of j greater than i

    let myStorage = {};
    for(let i = 0; i < systemNames.length; i++){
        if(myStorage[systemNames[i]]) {
         
            myStorage[systemNames[i]].push(stepNumbers[i])
            console.log(myStorage[systemNames[i]])
           
        } else {
            myStorage[systemNames[i]] = [stepNumbers[i]]
            console.log(myStorage[systemNames[i]])
        }
        console.log(myStorage[systemNames[i]])
    }
    console.log(myStorage)


    let isIncreasing = true;
let currentNumber = 0;
let nextNumber = 0;
    for(const key in myStorage) {
        console.log(myStorage[key])
        myStorage[key].forEach((num, index) => {
            currentNumber = num;
            nextNumber = myStorage[key][index+1]
            if(currentNumber < nextNumber) {
                isIncreasing === true;
            } else {
                isIncreasing = false
            }

        });

    }

    return isIncreasing;
}



 console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
 console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));