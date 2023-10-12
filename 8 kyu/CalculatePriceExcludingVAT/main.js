/*
  Write a function that calculates the original product price, without VAT.

  Example
  If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

  Thus, if your function receives 230.00 as input, it should return 200.00

  Notes:

  VAT is always 15% for the purposes of this Kata.
  Round the result to 2 decimal places.
  If null value given then return -1 
*/

// function excludingVatPrice(price) {
//   let result = 0;
//   const valueVAT = 1.15;

//   if (price === null) {
//     result = -1;
//   } else {
//     result = price / valueVAT;
//     return Math.round(result * 100) / 100;
//   }

//   return +result;
// }

// or

// function excludingVatPrice(price) {
//   return price === null ? -1 : Math.round((price / 1.15) * 100) / 100;
// }

// or

const excludingVatPrice = (price) =>
  price === null ? -1 : Math.round((price / 1.15) * 100) / 100;

console.log(excludingVatPrice(123));
