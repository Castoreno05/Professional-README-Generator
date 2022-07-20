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
            message: 'Would you like to include a social media badge?',
            name: 'socials',
            choices: ['Linkedin', 'Facebook', 'Twitter', 'Instagram'],
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
            message: 'What is your email?',
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


function generateBadges(socials) {
    var string = ""

    socials.array.forEach(choices => {
        string+=`https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white`
    })
    return string;
}

function generateREADME(data) {

return `${generateBadges(data.socials)}`
return `${data.choices.answers}

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
}

