//booleans and comparisons
//used to check is certain things in code are true or false
console.log(true, false, "true", "false");

//methods can return booleans
let email = "aarishlakhani2@gmail.com";
let result = email.includes("@");
console.log(result); //results true
let result2 = email.includes("!");
console.log(result2); //result false

//boolean in arrays
let names = ["mario", "luigi", "toad"];
let result3 = names.includes("luigi");
console.log(result3);

//comparision boolean
//in single equal = we are setting the age to 25
//in double equal == we are comparing if the value set in age is equal to number 25
let age = 25;
console.log(age == 25); //output true
console.log(age == 20); //output false
console.log(age != 25); //output false
console.log(age > 20); //output true
console.log(age < 20); //output false
console.log(age <= 25); //output true
console.log(age >= 25); //output true

let name = "aarish";
console.log(name == "aarish"); //output true
console.log(name == "Aarish"); //output false because A and a are still different
console.log(name > "Aarish"); //output true//a comes later in the alphabet compared to letter A
console.log(name > "navina"); //output false//letter n comes later in the alphabet compared to letter n
