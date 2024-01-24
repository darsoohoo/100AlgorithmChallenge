export function candies(n: number, m: number): number {
    // m % n
    // m - (m % n)
    console.log(10 % 3)
   let mod = (m % n); console.log(mod);
   let output = m - mod;
   return output;

}

 console.log(candies(3, 10));