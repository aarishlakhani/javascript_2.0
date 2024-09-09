//template strings
const title = "Best reads of 2024";
const author = "Mario";
const likes = "30";

//concatenation way
let result =
  "The blog called " + title + " by " + author + " has " + likes + " likes";
console.log(result);

//template string way
//use ``backticks
//use ${} to concatentate
let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result2);
