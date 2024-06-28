// importing the shape constructors
const { Shape, Triangle, Circle, Square } = require('../lib/shapes.js');

describe('Triangle', () => {
// test that triangle class can be instantiated
describe('instantiate triangle', () => {
    it('should be an instance of Triangle', () => {
        const triangle = new Triangle();

        expect(triangle).toBeInstanceOf(Triangle);
    });
});
});