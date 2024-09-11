let age = 25;

//loose comparison(different types can still be equal)

//Converts operands to the same type if they are of different types before comparison.
//This can lead to results where different types are considered equal if their coerced values are the same.
//String "25" is converted to number and after conversion both operands are of same type
console.log(age == 25); //output true
console.log(age == "25"); //output true
console.log(age != 25); //output false
console.log(age != "25"); //output false

//strict comparison (different types cannot be equal)
//checks for both value and type
console.log(age === 25); //output true
console.log(age === "25"); //output false //no type conversion //javascript doesnt convert the string and convert it to a number
console.log(age !== 25); //output false
console.log(age !== "25"); //output true
