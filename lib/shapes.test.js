// importing the shape constructors
const { Shape, Triangle, Circle, Square } = require('../lib/shapes.js');

describe('Shape', () => {
    // test that the shapes class can be instantiated
describe('instantiate shape', () => {
    it('should be ina instance of Shape', () => {
        const shape = new Shape();

        expect(shape).toBeInstanceOf(Shape)
    })
})
})

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

describe('Circle', () => {
    // test that circle class can be instantiated
    describe('instantiate circle', () => {
        it('should be an instance of Circle', () => {
            const circle = new Circle();
    
            expect(circle).toBeInstanceOf(Circle);
        });
        // test that the output of circle render reflects what was input
        it('test that the output of circle render reflects what was input', () => {
            const expectedString = `<circle cx="150" cy="100" r="75" stroke="red" fill="red" stroke-width="5"/><text text-anchor="middle" font-size="2em" x="150" y="100" font-family="monospace" fill="blue">SVG</text>`;
    
            const myCircle = new Circle("SVG", "blue", "red");
            const actualString = myCircle.render();
    
            expect(actualString).toBe(expectedString);
        })
    });
});

describe('Square', () => {
    // test that square class can be instantiated
    describe('instantiate square', () => {
        it('should be an instance of Square', () => {
            const square = new Square();
    
            expect(square).toBeInstanceOf(Square);
        });
        // test that the output of square render reflects what was input
        it('test that the output of square render reflects what was input', () => {
            const expectedString = `<rect x="100" y="50" width="100" height="100" stroke="red" fill="red" stroke-width="5"/><text text-anchor="middle" font-size="2em" x="150" y="100" font-family="monospace" fill="blue">SVG</text>`;
    
            const mySquare = new Square("SVG", "blue", "red");
            const actualString = mySquare.render();
    
            expect(actualString).toBe(expectedString);
        })
    });
});