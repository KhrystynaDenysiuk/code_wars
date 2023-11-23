/*
  Write a function that takes two arguments: an array of numbers and a number.
  The function returns the number of times a certain number is repeated in the array.
  If the number is not there, it outputs it: "This number is not in the array".
*/

const numbers = [1, 23, 4, 3, 4, 7, 1, 55, 2, 3, 6, 18, 1];

function getRepetitionOfNumber(numberArr, number) {
  let counter = 0;

  for (item of numberArr) {
    if (item === number) {
      counter++;
    }
  }

  return counter > 0 ? counter : "This number is not in the array";
}

getRepetitionOfNumber(numbers, 1);
