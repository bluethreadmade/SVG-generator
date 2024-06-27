class Text {
    constructor(letters, textColor) {
        this.letters = letters;
        this.textColor = textColor;
    }
    generateSVGText() {
        return '<text x="10" y="10" fill="'+ this.textColor + '">' + this.letters + '</text>';
    }
};

class Shape {
    constructor(shape, shapeColor) {
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    generateSVGShape() {
        if (this.shape === "square") {
            return '<rect x="10" y="10" width="30" height="30" stroke="' + this.shapeColor + '" fill="' + this.shapeColor + '" stroke-width="5"/>';
        } else if (this.shape === "circle") {
            return '<circle cx="25" cy="75" r="20" stroke="' + this.shapeColor + '" fill="' + this.shapeColor + '" stroke-width="5"/>';
        } else {
            return '<polygon points="50 15 100 100 0 100" stroke="' + this.shapeColor + '" fill="' + this.shapeColor + '" stroke-width="5"/>';
        }
    }
};

if

module.exports = { Text, Shape };