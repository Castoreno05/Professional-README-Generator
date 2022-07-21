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
            type: 'list',
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


function renderLicenseBadge(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (licenseType === 'General Public License v3.0') {
        licenseChosen = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    }
    return licenseChosen;
}
function renderLicenseLink(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = '(https://opensource.org/licenses/MIT)'
    } else if (licenseType === 'General Public License v3.0') {
        licenseChosen = '(https://www.gnu.org/licenses/gpl-3.0)'
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen= '(https://opensource.org/licenses/MPL-2.0)'
    }
    return licenseChosen;
}

function renderLicenseSection(data) {
    let licenseType = `${data.license}`
    let licenseChosen = ''
    if (licenseType === 'MIT License') {
        licenseChosen = 'MIT License'
    } else if (licenseType === 'General Public License v3.0') {
        licenseChosen = 'General Public License v3.0'
    } else if (licenseType === 'Mozilla Public License 2.0') {
        licenseChosen = 'Mozilla Public License 2.0'
    }
    return licenseChosen;
}
function generateREADME(data) {

    return `## License: ${renderLicenseBadge(data)}, ${renderLicenseLink(data)}.

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
    
This application is covered by the ${renderLicenseSection(data)}

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

