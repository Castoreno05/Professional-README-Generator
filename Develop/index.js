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
            choices: ['MIT License', 'General Public License v3.0', 'Mozilla Public License 2.0']
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


function createLicenseBadge(data) {
    let license = `${data.license}`
    let selectedLicense = ""
    if (license === 'MIT License') {
        selectedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license === 'General Public License v3.0') {
        selectedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    return selectedLicense;
}

function licenseLink(data) {
    let license = `${data.license}`
    let selectedLicense = ""
    if (license === 'MIT License') {
        selectedLicense = '(https://opensource.org/licenses/MIT)'
    } else if (license === 'General Public License v3.0') {
        selectedLicense = '(https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense = '(https://opensource.org/licenses/MPL-2.0)'
    }
    return selectedLicense;
}

function licneseSection(data) {
    let license = `${data.license}`
    let selectedLicense = ""
    if (license === 'MIT License') {
        selectedLicense = 'MIT License'
    } else if (license === 'General Public License v3.0') {
        selectedLicense = 'General Public License v3.0'
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense = 'Mozilla Public License 2.0'
    }
    return selectedLicense;
}

function generateREADME(data) {
    return `
### License: ${createLicenseBadge(data)}, ${licenseLink(data)}

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

