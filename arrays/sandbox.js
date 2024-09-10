//used to store collection of data/numbers
let ninja = ["shaun", "ryu", "chun-li"];
console.log(ninja);
//to get ryu
console.log(ninja[1]);
//overwrite 1 with Ken
ninja[1] = "ken";
console.log(ninja[1]);

let ages = [20, 25, 30, 25];
console.log(ages[2]);

let mixedArray = ["shaun", "crystal", 30, 50];
console.log(mixedArray[2]);

//array methods
//used to determine arrays length
console.log(ninja.length);
//used to join arrays
let result = ninja.join("-");
console.log(result);
//determine index of element inside th array
let result2 = ninja.indexOf("shaun");
console.log(result2);
//concat is used to join arrays toegther
let result3 = ninja.concat(ages);
console.log(result3);
//can also add new unique arrays
let result4 = ninja.concat(["shaun", "cystal"]);
console.log(result4);
//push method
//can alter the original value //called a destructive methid
let result5 = ninja.push("papa");
console.log(result5); //output 4 // this outputs the length and not the array list
// to access the array list we must log the original array
console.log(ninja); //output ['shaun', 'ken', 'chun-li', 'papa']//push alters the original value

let result6 = ninja.pop();
console.log(ninja); //result=['shaun', 'ken', 'chun-li']
//pop only removes one at a time// to remove multiple use a for loop
console.log(result6); //results the element popped//papa
