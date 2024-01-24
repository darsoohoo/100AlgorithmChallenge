export function centuryFromYear(year: number): number {
 // century is equal to first 2 digits + last 2 digits
 let first2Digits = year.toString().substring(0,2); console.log(first2Digits);
let Digit3 = Number(year.toString().substring(1, 1)); console.log(Digit3);
    let Digit4 = Number(year.toString().substring(2)); console.log(Digit4);
  let greaterThan1 = true;
  if(Digit3 > 0 || Digit4 > 0) {
    greaterThan1 = true;
  } else {
    greaterThan1 = false;
  }
 let  output = Number(first2Digits) + Number(greaterThan1);
 return output;
}

 console.log(centuryFromYear(1905));
 console.log(centuryFromYear(1700));