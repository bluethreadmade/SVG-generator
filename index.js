// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs")

const inputs = [
    {
        type: 'input',
        name: 'letters',
        message: 'Enter up to 3 letters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should your text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should your shape be?'
    }
]

// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers)
        })
}

init();