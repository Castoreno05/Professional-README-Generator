// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let license = `${data.license}`
  let selectedLicense = ""
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
// If there is no license, return an empty string
function renderLicenseLink(license) {
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
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##${generateMarkdown.renderLicenseBadge(data.license)}, 
`;
}

module.exports = generateMarkdown;

// ${generateMarkdown.renderLicenseBadge(data.license)}