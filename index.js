#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message: 'Enter First Number:'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter Second Number:'
    },
    {
        type: 'list',
        name: 'Operators',
        message: "Select any Option",
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (answer.Operators === 'Addition') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.Operators === 'Subtraction') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.Operators === 'Multiplication') {
    console.log(answer.num1 * answer.num2);
}
else if (answer.Operators === 'Division') {
    console.log(answer.num1 / answer.num2);
}
else
    (console.log("Please Select Valid Option"));
