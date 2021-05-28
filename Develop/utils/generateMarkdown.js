// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else {
    return`('Please enter a valid license.')`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Mozilla') {
    return `https://opensource.org/licenses/MPL-2.0`;
  } else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else {
    return`('Please enter a valid license.')`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Mozilla') {
    return `This application is licenses by Mozilla`;
  } else if (license === 'Apache') {
    return `This application is licenses by Apache`;
  } else if (license === 'MIT') {
    return `This application is licenses by MIT`;
  } else {
    return`('Please enter a valid license.')`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(inquirerResponse) {
  return `
  # ${inquirerResponse.title}

  ## Description:
  ${inquirerResponse.description}

  ## Installation:
  ${inquirerResponse.installation}

  ## Usage:
  ${inquirerResponse.usage}

  ## Contributions:
  ${inquirerResponse.contributions}

  ## Tests
  ${inquirerResponse.tests}

  ## GitHub User:
  ${inquirerResponse.github}

  ## Email:
  ${inquirerResponse.email}

  ## License:
  ${renderLicenseBadge(inquirerResponse.license)}
  ${renderLicenseSection(inquirerResponse.license)}
  ${renderLicenseLink(inquirerResponse.license)}
  `;
}

module.exports = generateMarkdown;

// Add table of contents
// Use double hashtags to create links to headers in Table of Contents
// Find more license badges
