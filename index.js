// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('utils');
const generateMarkdown = require('./utils/generateMarkdown');


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
        name: 'tableofcontents',
        message: 'Enter your Table of Contents'
    },
    {
        type: 'input',
        name: 'installguide',
        message: 'How do you install your app?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your app?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses have you used?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github handle'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address!'
    }];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // TODO: Create a function to write README file
        fs.writeFile('ReadMe_new.md', generateMarkdown(data));
    });

 }

// Function call to initialize app
init();
