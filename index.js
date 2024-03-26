import inquirer from "inquirer";
// 1) computer will generate a random number-Done.
// 2) user input for guessing number-Done.
// 3)computer user input with generated number and shoe result-Done.
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a  between 1-10: ",
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
