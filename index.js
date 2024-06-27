// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs");
//include inputs
const inputs = require("./inputs");
// include Text class
const { Text } = require("./lib/shapes");





// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers);
             //get SVG file content
            const mySVG = new Text(answers.letters, answers.textColor);

            // write the SVG file
            fs.writeFile('logo.svg', mySVG.generateSVGText(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('file created');
                }
            });
        });
}

init();