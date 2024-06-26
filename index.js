// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs");
//include inputs
const inputs = require("./inputs");



// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers.letters)
        });
    //get SVG file content
    const generateSVG = (letters) => {
        new Text(letters);
        }
    // write the SVG file
    writeToFile('logo.svg', generateSVG(letters));

}

init();