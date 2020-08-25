const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "",
    name: "",
    message: "",
  },
  {
    type: "",
    name: "",
    message: "",
  },
  {
    type: "",
    name: "",
    message: "",
  },
  {
    type: "",
    name: "",
    message: "",
  },
  {
    type: "",
    name: "",
    message: "",
  },
];
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
