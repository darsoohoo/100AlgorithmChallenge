export function depositProfit(deposit: number, rate: number, threshold: number): number {
    let output = 0;
    console.log(threshold)
    // create for loop that sets initial balance to the deposit, multiplies the balance * rate
    // stop the loop once balance is >= threshold
    let balance = deposit;
    let years = 0;
    for (let i = 0; balance < threshold; i++) {
        console.log(years);
        balance = balance + (balance * (rate / 100))
        console.log(balance);
        years++;

    }

    output = years;

    return output;
}

console.log(depositProfit(100, 20, 170))