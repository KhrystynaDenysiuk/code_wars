/*
  Write a function that takes an array of objects, runs through it, and adds an adjective depending on the gender.
  beautiful
  handsome
*/

const people = [
  {
    name: "Ross",
    sex: "male",
  },
  {
    name: "Monica",
    sex: "female",
  },
  {
    name: "Chandler",
    sex: "male",
  },
  {
    name: "Phoebe",
    sex: "female",
  },
  {
    name: "Joey",
    sex: "male",
  },
  {
    name: "Rachel",
    sex: "female",
  },
];

function addNiceAdjectives(arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el.sex === "male") {
      el.name += " is handsome";
    } else {
      el.name += " is beautiful";
    }
  }
  return arr;
}

addNiceAdjectives(people);
