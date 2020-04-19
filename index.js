const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Your email"
    },
    {
        type: "input",
        name: "title",
        message: "Project title"
    },
    {
        type: "input",
        name: "description",
        message: "Description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "Install Command"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage Commands"
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you need?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "contributors",
        message: "List of Contributors"
    },
    {
        type: "input",
        name: "tests",
        message: "Test commands?"
    }
];

function writeToFile(data) {
    fs.writeFile("README.md", data, (err) => {
        if (err) throw err;
    });
}
function init() {
    inquirer.prompt(questions)
    .then(function (response) {
        api.getUser(response.username).then(function(data){
            writeToFile(generateMarkdown(response, data));
        });
    });
};
init();