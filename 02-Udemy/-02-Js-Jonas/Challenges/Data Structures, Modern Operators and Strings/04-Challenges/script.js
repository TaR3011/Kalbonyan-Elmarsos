"use strict";

/////////
// CHALLENGE 4

// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const tex = document.querySelector("textarea").value;
const btn = document.querySelector("button");

// btn.addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;

//   // console.log(text);
//   const names = text.split('\n');
//   for (const fullName of names) {
//     fullName.toLowerCase;
//     const [first, last] = fullName.split('_');
//     const last2 = last.replace(last[0], last[0].toUpperCase());
//     console.log(last2);
//     const camleCase = first + last2;
//     console.log(camleCase);
//   }
// });

btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
