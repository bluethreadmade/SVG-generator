class Text {
    constructor(letters, textColor) {
        this.letters = letters;
        this.textColor = textColor;
    }
    generateSVGText() {
        return `<text x="100" y="100" font-family="monospace" fill="${this.textColor}"> ${this.letters} </text>`;
    }
};

class Shape {
    constructor(shape, shapeColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    generateSVGShape() {
        if (this.shape === "square") {
            return `<rect x="10" y="10" width="150" height="150" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`;
        } else if (this.shape === "circle") {
            return `<circle cx="150" cy="150" r="75" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`;
        } else {
            return `<polygon points="50 15 100 100 0 100" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>`;
        }
    }
};

module.exports = { Text, Shape };