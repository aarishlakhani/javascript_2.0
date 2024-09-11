//type conversion
let score = "100";
//we tried to add 100 and 1 but it resulted in 1001 //concatenation because both are of different types
console.log(score + 1); //results in 1001
console.log(typeof score); //shows as string

//type conversion
//takes string "100" and converts to Number
score = Number(score);
console.log(score + 1); //output is 101

//to check type of a variable
console.log(typeof score); //shows as number

//In boolean 0 and empty  is false and anything positive or negative is true
//you cannot convert a string to number it would give NaN
//you can convert a number to string
