//variable defined at the root of the document
//global variable- it can be used anywhere in the code
//var ignores block scope but let and const follow it

let age = 30;

if (true) {
  //local variable- variable value stays same inside the scope
  let age = 40;
  let name = "shaun";
  //if I were to define it as just age =40 instead it would take the value of global variable instead of local
  //its only when i redefine it to let age =40 it gives it local scope
  console.log("inside 1st code block: ", age, name); //output 40 shaun

  if (true) {
    console.log("inside 2nd code block", age); //this take the value of 40 and takes the most recently defined value
    //it doesnt take 30 because 2nd code block is nested insted a code block
  }
}

console.log("outside code block: ", age, name); //will output 40 not not shaun because shaun is a local variable
