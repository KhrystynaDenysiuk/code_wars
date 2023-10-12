/* Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

      When positives and positives interact, they remain positive.
      When negatives and negatives interact, they remain negative.
      But when negatives and positives interact, they become neutral, and are shown as the number 0.

*/

// function neutralise(s1, s2) {
//   let result = "";

//   for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
//     if ((s1[i] === "-" && s2[i] === "+") || (s1[i] === "+" && s2[i] === "-")) {
//       result += 0;
//     } else if (s1[i] === "-" && s2[i] === "-") {
//       result += "-";
//     } else if (s1[i] === "+" && s2[i] === "+") {
//       result += "+";
//     }
//   }
//   return result;
// }

// or

function neutralise(s1, s2) {
  let result = "";

  for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
    result += s1[i] !== s2[i] ? 0 : s1[i];
  }

  return result;
}

console.log(neutralise("+--", "+-+"));
