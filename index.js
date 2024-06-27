// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs");
//include inputs
const inputs = require("./inputs");
// include Shape class and specific shapes classes
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");

// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers);
            //get SVG file content

            if (answers.shape === 'triangle') {
                const shape = Triangle
            } else if (answers.shape === 'circle'){
                const shape = Circle
            } else {
                const shape = Square
            }

            const mySVG = new Triangle(answers.letters, answers.textColor, answers.shapeColor);

            function renderSVG(mySVG) {
                return `<svg width="600" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
${mySVG.renderTextAndShape()}
</svg>`;
                
            };

            // write the SVG file
            fs.writeFile('logo.svg', renderSVG(mySVG), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('file created');
                }
            });
        });
}

init();