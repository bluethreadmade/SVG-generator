class Shape {
    // to make shape a super class for all shapes leave shapeColor in Shape class, no method, put text inside shape?
    constructor(letters, textColor, shapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };

    renderText() {
        return `<text x="100" y="100" font-family="monospace" fill="${this.textColor}">${this.letters}</text>`;
    };
}

class Triangle extends Shape {
    renderTextAndShape() {
        return `<polygon points="50 15 100 100 0 100" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>${super.renderText()}`;
    }
}

class Circle extends Shape {
    renderTextAndShape() {
        return `<circle cx="150" cy="150" r="75" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>${super.renderText()}`;
    }
}

class Square extends Shape {
    renderTextAndShape() {
        return `<rect x="10" y="10" width="150" height="150" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>${super.renderText()}`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };