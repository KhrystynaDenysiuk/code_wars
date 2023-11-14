/*
  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

// const summation = (num) => {
//   let totalSum = 0;

//   for (let i = 1; i <= num; i++) {
//     totalSum += i;
//   }

//   return totalSum;
// };

// or

const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(8));
