export function alternatingSums(a: number[]): number[] {
    // create two arrays called teams
    // add people to teams arrays
    // get total weight of each team
    let output: number[] = [];
    let team1: number[] = []
    let team2: number[] = []
    let currentTeam = "team1"
    a.forEach((person) => {

        if (currentTeam === "team1") {
            team1.push(person);
            currentTeam = "team2"
        } else {
            team2.push(person);
            currentTeam = "team1"
        }
    })

    console.log(team1)
    console.log(team2)

    let totalWeightTeam1 = team1.reduce((acc, curNum) => {
        return acc + curNum
    }) 
    console.log(totalWeightTeam1)

    let totalWeightTeam2 = team2.reduce((acc, curNum) => {
        return acc + curNum
    }) 
    console.log(totalWeightTeam2)

    output = [totalWeightTeam1, totalWeightTeam2]

    return output;

}

console.log(alternatingSums([50, 60, 60, 45, 70]))