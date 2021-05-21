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
    }

]).then (inquirerResponse => fs.writeFileSync('README.md', generateMarkdown(inquirerResponse)));
 