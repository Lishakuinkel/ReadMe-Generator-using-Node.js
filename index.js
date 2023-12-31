// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//econst util = require('utils');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information of your app.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide Contribution guidelines.'
    },
    {
        type: "input",
        name: "tests",
        message: "Provide test instructions."
    },
    {
        type: "list",
        name: "license",
        message: "Choose the appropriate license used for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github handle.'
    },
   
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        // TODO: Create a function to write README file
        fs.writeFile('ReadMe_new.md', generateMarkdown(data), function (error){
            if (error){
                return console.log(error);
            }
            console.log("success");
        });
    });

 }

// Function call to initialize app
init();
