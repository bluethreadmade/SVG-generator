class Shape {
    // to make shape a super class for all shapes leave shapeColor in Shape class, no method, put text inside shape?
    constructor(letters, textColor, shapeColor) {
        this.letters = letters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    };

    renderText() {
        return `<text text-anchor="middle" x="150" y="100" font-family="monospace" fill="${this.textColor}">${this.letters}</text>`;
    };
}

class Triangle extends Shape {
    renderTextAndShape() {
        return `<polygon points="0 200 150 0 300 200" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="0"/>${super.renderText()}`;
    }
}

class Circle extends Shape {
    renderTextAndShape() {
        return `<circle cx="150" cy="100" r="75" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>${super.renderText()}`;
    }
}

class Square extends Shape {
    renderTextAndShape() {
        return `<rect x="100" y="50" width="100" height="100" stroke="${this.shapeColor}" fill="${this.shapeColor}" stroke-width="5"/>${super.renderText()}`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };