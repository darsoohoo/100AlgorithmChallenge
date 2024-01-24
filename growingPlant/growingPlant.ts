export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    // create variable for number to each - desired height
    /// create variable for current hieght
    // for loop until current height is equal to desired height
    let curHeight = 0;
    let daysPassed = 0
    for(let i = 0; curHeight< desiredHeight; i++ ) {
      
        curHeight += upSpeed-downSpeed;
        daysPassed = i;
     
    }
    console.log(curHeight)
    console.log(daysPassed)
    return daysPassed
}

 console.log(growingPlant(100, 10, 910))