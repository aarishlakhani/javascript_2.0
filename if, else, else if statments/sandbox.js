const password = "p@sswordy";

if (password.length >= 12) {
  console.log("That password is mighty strong");
} else if (password.length >= 8) {
  console.log("That password is long enough");
} else {
  console.log("password is not long enough");
}
