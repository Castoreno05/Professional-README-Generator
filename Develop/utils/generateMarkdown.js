// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
    let license = `${data.license}`
    let selectedLicense = ''
    if (license === 'MIT License') {
        selectedLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'General Public License v3.0') {
        selectedLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    }
    return selectedLicense;
}
// TODO: Create a function that returns the license link
function renderLicenseLink(data) {
    let license = `${data.license}`
    let selectedLicense = ''
    if (license === 'MIT License') {
        selectedLicense = '(https://opensource.org/licenses/MIT)'
    } else if (license === 'General Public License v3.0') {
        selectedLicense = '(https://www.gnu.org/licenses/gpl-3.0)'
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense= '(https://opensource.org/licenses/MPL-2.0)'
    }
    return selectedLicense;
}
// TODO: Create a function that returns the license section of README
function renderLicenseSection(data) {
    let license = `${data.license}`
    let selectedLicense = ''
    if (license === 'MIT License') {
        selectedLicense = 'MIT License'
    } else if (license === 'General Public License v3.0') {
        selectedLicense = 'General Public License v3.0'
    } else if (license === 'Mozilla Public License 2.0') {
        selectedLicense = 'Mozilla Public License 2.0'
    }
    return selectedLicense;
}

// TODO: Create a function to generate markdown for README
function generateREADME(data) {

    return `${renderLicenseBadge(data)}${renderLicenseLink(data)}

# ${data.name}
    
---
    
## Description

${data.description}   

---
    
## Table of Contents

* [Installation section](#installation)
* [Usage section](#useage)
* [License section](#license)
* [Contributing section](#cotributing)
* [Tests section](#tests)
* [Questions section](#questions)

---
    
## Installation
  
${data.installation}

---
    
## Usage
   
${data.usage}

---
    
## License
    
This application is covered under ${renderLicenseSection(data)}

---
    
## Contributing

${data.contributors}
    
---
    
## Tests
    
${data.tests}

---
    
## Questions

For more information about my work please email me at <${data.email}>

My Github account can be found here https://www.github.com/${data.username}

`
};

module.exports = generateREADME;