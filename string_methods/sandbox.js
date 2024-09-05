//common string methods
let email = "aarishlakhani2@gmail.com";
console.log(email.lastIndexOf("l"));
//from 0 to character 6
let result = email.slice(0, 6);
console.log(result);

//from 2 to +10 strings therefore till 12
let result2 = email.substr(2, 10);
console.log(result2);
//only replaces the first a with n
let result3 = email.replace("a", "n");
console.log(result3);
