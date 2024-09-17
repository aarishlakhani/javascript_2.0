//logical operators - OR || and AND &&
//In expressions where both && and || are used, && will be evaluated first.
const password = "p@ss";

if (password.length >= 12 && password.includes("@")) {
  console.log("That password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length >= 4)
) {
  console.log("That password is strong enough");
} else {
  console.log("password is not strong enough");
}
