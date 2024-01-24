export function addBorder(picture: string[]): string[] {
    // find length of strings in the array
    let lengthOfStrings = picture[0].length; console.log(lengthOfStrings)
    // find length of array
    let arrayLength = picture.length; console.log(arrayLength)
    // initialize pictureFrameArray
    let pictureFrameArray: string[] = []
    // create top border, add to pictureFrameArray
    let topBorder: string = ""
    const requiredNoOfAsterisks = lengthOfStrings + 2; console.log(requiredNoOfAsterisks)
    for (let i = 0; i < requiredNoOfAsterisks; i++) {
        topBorder += "*"
    }
    console.log(topBorder)
    pictureFrameArray.push(topBorder)
    // prepend borders to each string, add to pictureFrameArray
    // append borders to each string, add to pictureFrameArray
    picture.forEach((item: string) => {
        console.log(item)
        let itemWithBorders = `*${item}*`; console.log(itemWithBorders)
        pictureFrameArray.push(itemWithBorders)
    })

    // create bottom border, add to pictureFrameArray
    let bottomBorder = ""
    for (let i = 0; i < requiredNoOfAsterisks; i++) {
        bottomBorder += "*"
    }
    pictureFrameArray.push(bottomBorder); console.log(pictureFrameArray);
    console.log(pictureFrameArray.length)

    return pictureFrameArray
}

console.log(addBorder(["abc", "ded"]));