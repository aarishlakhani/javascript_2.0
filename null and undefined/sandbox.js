//null= explicitly set a variable with no value
//null is used as a placeholder in forms when using the clear/start over button to indicate the the variable should empty
//used to reset variables
let bage = null;
console.log(bage, bage + 3, `the age is $(bage)`); //output =null 3 'the age is $(bage)'//null takes the value of 0 during a calculation
//when we try to output it in a string then null becomes a string-notice how the output for both null and undefined is different

//undefined = for variables that have not yet been defined
let age;
console.log(age, age + 3, `the age is $(age)`); //output = undefined NaN 'the age is $(age)' where age=undefined
//age+3 is NaN and age is undefined again
