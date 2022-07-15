// Aleeza and Lis both play basketball in different teams. In the latest 3 games, Aleeza's team scored 89, 120 and 103 points, while Lis's team scored 116, 94 and 123 points.

// 1a) Calculate the average score for each team.

let aleezaScore1 = 89;
let aleezaScore2 = 120;
let aleezaScore3 = 103;
let lisaScore1 = 116;
let lisaScore2 = 94;
let lisaScore3 = 123;

const aleezaScoreAve = Math.round(
  aleezaScore1 + aleezaScore2 + aleezaScore3 / 3
);

console.log("01a Aleeza's team average score is", aleezaScoreAve);

const lisaScoreAve = Math.round(lisaScore1 + lisaScore2 + lisaScore3 / 3);

console.log("01a Lisa's team average score is", lisaScoreAve);

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);
// 1b) Decide which teams wins in average (highest average score), and print the winner to the console, including their average score in the output.

if (aleezaScoreAve >= lisaScoreAve) {
  console.log(
    "01b Aleeza's team average of",
    aleezaScoreAve,
    "wins over Lisa's team average of",
    lisaScoreAve
  );
} else {
  console.log("01b Lisa's team average of", lisaScoreAve, "wins");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);

// 1c) Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score).

let aleezaScore4 = 91;
let aleezaScore5 = 125;
let aleezaScore6 = 108;
let lisaScore4 = 120;
let lisaScore5 = 95;
let lisaScore6 = 130;

const aleezaScoreAve1 = Math.round(
  aleezaScore4 + aleezaScore5 + aleezaScore6 / 3
);

console.log("01c Aleeza's team average score is", aleezaScoreAve1);

const lisaScoreAve1 = Math.round(lisaScore4 + lisaScore5 + lisaScore6 / 3);

console.log("01c Lisa's team average score is", lisaScoreAve1);

if (aleezaScoreAve1 >= lisaScoreAve1) {
  console.log(
    "01c Aleeza's team average of",
    aleezaScoreAve1,
    "wins over Lisa's team average of",
    lisaScoreAve1
  );
} else {
  console.log("01c Lisa's team average of", lisaScoreAve1, "wins");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);

// 1d) Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console.

let maryScore1 = 97;
let maryScore2 = 134;
let maryScore3 = 105;

const maryScoreAve = Math.round(maryScore1 + maryScore2 + maryScore3) / 3;

if (maryScoreAve > aleezaScoreAve1 && maryScoreAve > lisaScoreAve1) {
  console.log("1d", maryScoreAve, "is the winner");
} else if (aleezaScoreAve1 > maryScoreAve && aleezaScoreAve1 > lisaScoreAve1) {
  console.log("1d", aleezaScoreAve1, "is the winner");
} else if (lisaScoreAve1 > aleezaScoreAve1 && lisaScoreAve1 > maryScoreAve) {
  console.log("1d Lisa's team with a score of", lisaScoreAve1, "is the winner");
} else {
  console.log("nobody wins");
}

console.log(
  "---------------------------------------------------------------------------------------------------------------"
);
// 1e) Like before, change the scores to generate different winners, keeping in mind that there might be draws.

let maryScore4 = 300;
let maryScore5 = 154;
let maryScore6 = 110;

const maryScoreAve1 = Math.round(maryScore4 + maryScore5 + maryScore6) / 3;

console.log("1e mary's team average score is", maryScoreAve1);

if (maryScoreAve1 > aleezaScoreAve1 && maryScoreAve1 > lisaScoreAve1) {
  console.log("1e", maryScoreAve, "is the winner");
} else if (aleezaScoreAve1 > maryScoreAve1 && aleezaScoreAve1 > lisaScoreAve1) {
  console.log("1e", aleezaScoreAve1, "is the winner");
} else if (lisaScoreAve1 > aleezaScoreAve1 && lisaScoreAve1 > maryScoreAve1) {
  console.log("1e Lisa's team with a score of", lisaScoreAve1, "is the winner");
} else {
  console.log("nobody wins");
}
