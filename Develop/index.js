// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the name of your application.'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description.'

    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions for installation of the application.'

    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use this application.'
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Please include any contributions or resources.'

    },

    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any test guidelines or methods here.'

    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'

    },

    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: [
            'Mozilla',
            'Apache',
            'MIT'
        ]
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'

    },

]).then (inquirerResponse => fs.writeFileSync('README.md', generateMarkdown(inquirerResponse)));
 