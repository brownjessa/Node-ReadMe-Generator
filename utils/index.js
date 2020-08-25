const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const questions = [
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
