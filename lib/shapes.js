class Text {
    constructor(letters, textColor) {
        this.letters = letters;
        this.textColor = textColor;
    }
    generateSVGText() {
        return '<text x="10" y="10" fill="'+ this.textColor + '">' + this.letters + '</text>';
    }
};

module.exports = { Text };