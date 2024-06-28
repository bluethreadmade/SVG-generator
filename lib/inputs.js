const inputs = [
    {
        type: 'input',
        name: 'letters',
        message: 'Enter up to 3 letters for your logo text',
        validate: (letters) => {
            if(letters.length > 3) {
                return 'Please enter 3 or fewer letters';
            }

            return true;
        },
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