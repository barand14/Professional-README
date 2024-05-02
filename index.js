// TODO: Include packages needed for this application
const generatateMarkdown = require("./generateMarkdown.js"); //importe generatateMarkdown function
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "title",
    message: "Please enter the title of your application",
    },
    {
        type: "input",
        name: "description",
        message: " Enter a brief description of your application",
        },
        {
            type: "input",
            name: "installation",
            message: "please enter any installation instructions",
            },
            {
                type: "input",
                name: "usage",
                message: "please enter any usage instructions",
                },   {
                    type: "input",
                    name: "contribution",
                    message: "please list any contribution",
                    },
                    {
                    type: "list",
                    name: "license",
                    message: "please choose the license for your app.", 
                    choices: ["MIT", "Mozilla","ISC","Apache", "No License"]
                    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, generatateMarkdown(data), (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log("README.md has been successfully generated!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        fs.writeFileSync("readmetest.md", generatateMarkdown(data))
    }  
)
    .catch((error) => {
        console.error("Error occured during prompt:", error);
    });
}

// Function call to initialize app
init();
