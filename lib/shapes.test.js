// importing the shape constructors
const Triangle = require('../lib/shapes.js');
const Circle = require('../lib/shapes.js');
const Square = require('../lib/shapes.js');

// create testing suite for Triangle
describe('Triangle', () => {
    // test to verify that a render function is called in the triangle class
    describe('render', () => {
        const shape = new Triangle();
        shape.shapeColor("blue");
        expect(shape.render()).toEqual('<polygon points="0 200 150 0 300 200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="0"/>${super.render()}');
    })
})