#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First no.", type: "number", name: "firstNumber" },
  { message: "Enter Second no.", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "modulus"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber)
}
 else if (answer.operator === "Subtraction") {
   console.log(answer.firstNumber - answer.secondNumber)
}
else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber)
}
else if ( answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber)
}
else if (answer.operator === "modulus"){
  console.log(answer.firstNumber % answer.secondNumber)
}
else {
  console.log("please select valid operator")
}
