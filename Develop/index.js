// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// Allows me to create a file system
const fs = require('fs');
// exporting generateREADME from generateMARKdown file
const generateREADME = require('./utils/generateMarkdown')

inquirer
    .prompt([
        /* Pass the questions pertaining to the README here */
        {
            // List of licenses to be placed at the top of the README
            type: 'list', 
            message: 'Which license badge would you like to include?',
            name: 'license',
            choices: ['MIT License', 'General Public License v3.0', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of this README?',
        },
        {
            type: 'input',
            message: 'Provide a description of this application',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Include the steps required to install this project. Provide a step-by-step description of how to get the development environment running.',
            name: 'installation',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for usage'
        },
        {
            type: 'input',
            message: 'Provide examples on how to run test here',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Provide a list of contributors along with their contact information',
            name: 'contributors'

        },
        {
            // gnerateMarkdown contains the link to Github. This username completes the path to your Github
            type: 'input',
            message: 'Please enter a github username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then((answers) => {
        // Used for feedback from the questions answered
        console.log(answers)

        fs.writeFile('README.md', (generateREADME(answers)), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });