export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    // get total weight for my arms
    // get total weight for friends arms
    // if total weight of my arms is equal to the weight of my friends arms, then true, else false
    let output = true;

    const myTotal = yourLeft + yourRight;
    const friendsTotal = friendsLeft + friendsRight;

    return myTotal === friendsTotal ? true : false;

}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
