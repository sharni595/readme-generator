// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'title',
           message: 'What is the title of your app?' 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Brief description of your app:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Brief instructions for installing app:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Briefly explain how app is used:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who contributed to making the app?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Explain how to test app:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select the correct license:',
            choices: ['MIT', 'Apache', 'GPL-3.0', 'BSD-3', 'None']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, fileName), data, err =>{
        console.log(err);
    })
}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then(answers => {
            writeToFile('README.md', generateMarkdown(answers));
            console.log('README complete!')
        });
};

// Function call to initialize app
init();
