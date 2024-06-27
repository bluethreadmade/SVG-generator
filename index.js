// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs");
//include inputs
const inputs = require("./inputs");
// include Text class and Shape class
const { Text, Shape } = require("./lib/shapes");

// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers);
            //get SVG file content
            const mySVGText = new Text(answers.letters, answers.textColor);
            const mySVGShape = new Shape(answers.shape, answers.shapeColor)

            function generateSVG(mySVGText, mySVGShape) {
                return `<svg width="600" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    ${mySVGShape.generateSVGShape()}
                    ${mySVGText.generateSVGText()}
                </svg>`;
                
            };

            // write the SVG file
            fs.writeFile('logo.svg', generateSVG(mySVGText, mySVGShape), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('file created');
                }
            });
        });
}

init();