// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please add a short description of your project:",
    },
    {
      type: "input",
      name: "table",
      message: "Please add your Table of Contents:",
    },
    {
      type: "input",
      name: "installation",
      message: "What installation is this?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the usage?",
    },
    {
      type: "input",
      name: "license",
      message: "Which licenses are included in your project?",
    },
    {
      type: "input",
      name: "contributers",
      message: "Please include the contributers to your project:",
    },
    {
      type: "input",
      name: "test",
      message: "What are the test instructions for your project?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
  ]),
];

console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
