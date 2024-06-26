// Include inquirer package
const inquirer = require("inquirer");
// Include fs
const fs = require("fs");
//include inputs
const inputs = require("./inputs");
// include shapes
const shapes = require("./lib/shapes");


class Text {
    constructor(letters) {
    this.letters = letters;
    }
    generateSVG() {
        return '<text x="10" y="10">' + this.letters + '</text>';
    }
}


// initialize the app
function init() {
    // ask the questions
    inquirer
        .prompt(inputs)
        .then((answers) => {
            console.log(answers);
             //get SVG file content
            const mySVG = new Text(answers.letters);

                

            // write the SVG file
            fs.writeFile('logo.svg', mySVG.generateSVG(), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('file created');
                }
            });
        });
}

init();