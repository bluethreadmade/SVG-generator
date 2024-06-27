const inputs = [
    {
        type: 'input',
        name: 'letters',
        message: 'Enter up to 3 letters for your logo'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should your text be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo',
        choices: ['Square', 'Circle', 'Triangle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should your shape be?'
    }
]

module.exports = inputs;