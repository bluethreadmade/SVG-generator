// importing the shape constructors
const { Shape, Triangle, Circle, Square } = require('../lib/shapes.js');

describe('Triangle', () => {
// test that triangle class can be instantiated
describe('instantiate triangle', () => {
    it('should be an instance of Triangle', () => {
        const triangle = new Triangle();

        expect(triangle).toBeInstanceOf(Triangle);
    });
    // test that the output of triangle render reflects what was input
    it('test that the output of triangle render reflects what was input', () => {
        const expectedString = `<polygon points="0 200 150 0 300 200" stroke="red" fill="red" stroke-width="0"/><text text-anchor="middle" font-size="2em" x="150" y="100" font-family="monospace" fill="blue">SVG</text>`;

        const myTriangle = new Triangle("SVG", "blue", "red");
        const actualString = myTriangle.render();

        expect(actualString).toBe(expectedString);
    })
});
});