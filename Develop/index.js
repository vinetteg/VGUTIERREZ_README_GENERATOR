// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt([
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
        name: "installation",
        message: "What installation is this?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage?",
      },
      {
        type: "list",
        name: "license",
        message: "Please choose the license used for this project:",
        choices: ["MIT", "GNU", "GPL", "Other", "None"],
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
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((answers) => {
      fs.writeFile("README.md", writeToFile(answers), (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
      );
    }),
];

// console.log(questions);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeToFile = (answers) =>
  `# ${answers.title} 
  # Description 
  ${answers.description} 
  # Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)  
  * [License](#license)
  * [Contributers](#contributers)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  
  # Installation
  <a name="installation"></a>

  * ${answers.installation} 

  # Usage
  <a name="usage"></a>
  * ${answers.usage} 

  # License
  <a name="license"></a>
  * ${answers.license} 


  # Contributers
  <a name="contributers"></a>
  * ${answers.contributers} 

  # Test Instructions
  <a name="test-instructions"></a>
  * ${answers.test} 

  # Questions
  <a name="questions"></a>
  * [Github Link](https://github.com/${answers.github})
  * For additional questions, please contact me via email at ${answers.email}
 `;

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
