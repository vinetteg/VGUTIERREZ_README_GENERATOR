const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div>
  <h1>${answers.dob}</h1>
  <h1>${answers.pet}</h1>
</div>
</body>
</html>`;

let data = ``;

inquirer
  .prompt([
    {
      type: "input",
      name: "dob",
      message: "what year were you born?",
    },
    {
      type: "input",
      name: "pet",
      message: "what type of pet do you have",
    },
  ])
  .then((answers) => {
    fs.writeFile("demo.html", generateHTML(answers), (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
