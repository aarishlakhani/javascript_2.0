//break and continue

//break
const scores = [10, 20, 30, 45, 0, 60, 75, 100, 20, 30];

for (let i = 0; i < scores.length; i++) {
  //it would ignore the rest of the code and go back to the top and continue running the next iteration
  if (scores[i] === 0) {
    continue;
  }
  console.log("your score: ", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!");
    //break command would end the iteration right here and we would go down to the end of the loop
    break;
  }

  //due to break and continue the scores on the scoreboard show as 10, 20, 30, 45, 60, 75, 100
}
