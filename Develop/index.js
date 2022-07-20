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
            message: 'Which license badge would you like to include?',
            name: 'license',
            choices: ['MIT License', 'General Public License v3.0', 'Mozilla Public License 2.0'],
        },
        {
            type: 'input',
            message: 'Please provide a description of the Installation process',
            name: 'installation',
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
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers)

        fs.writeFile('README.md', (generateREADME(answers)), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });


function generateREADME(data) {

return `${data.choices}

## ${data.name}
    
---
    
# Description

${data.description}   

---
    
# Table of Contents

* [Go to the Installation section](#installation)
* [Go to the Usage section](#useage)
* [Go to the License section](#license)
* [Go to the Contributing section](#cotributing)
* [Go to the Tests section](#tests)
* [Go to the Questions section](#questions)

---
    
# Installation
  
${data.installation}

---
    
# Usage
    
---
    
# License
    
This application is covered by the ${licneseSection(data)}

---
    
# Contributing
    
---
    
# Tests
    
---
    
# Questions

For more information about my work please email me at <${data.email}>

My Github account can be found here https://www.github.com/${data.username}

`
};

