export function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    console.log(threshold)
    // check which pros have an average rating under 3.5
    // initialize an array to store averages
    // check which averages are under 3.5
    let averages:number[] = []
    
    ratings.forEach((pro) => {
        let numOfRatings = pro.length;
        let sum = 0
        pro.forEach((rating) => {
            sum += rating;
        })
        averages.push( sum/numOfRatings )
        sum = 0
    })
    console.log(averages)

    return averages.filter((item) => item < 3.5).map((item, index) => {
        return index +1;
    })

}

console.log(ratingThreshold(3.5, 
    [[3, 4],    // 3.5
    [3, 3, 3, 4],   //3.25
    [4]]));       //4