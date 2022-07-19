// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// Allows me to create a file system
const fs = require('fs');

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this README?',
        },
        {
            type: 'checkbox',
            message: 'What languages would you like to be included?',
            name: 'stack',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'phone', 'telekinesis'],
        },
        {
            type: 'input',
            message: 'Please provide a description of this application',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter a github username',
            name: 'username'
        },
        // {
        //     type: 'input',
        //     message: 'What is your email?',
        //     name: 'email'
        // }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers)

        fs.writeFile('README.md', (generateREADME(answers)), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

function generateREADME(data) {
    return `## ${data.name}
    
---
    
# Description

${data.description}   

---
    
# Table of Contents
    
---
    
# Installation
    
---
    
# Usage
    
---
    
# License
    
---
    
# Contributing
    
---
    
# Tests
    
---
    
# Questions

For more information about my work please email me at <${data.email}>

// My Github account can be found here 

`
}
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
