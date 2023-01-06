const statement = document.getElementById('statement');
const optionsButtons = document.querySelector('#options').children;
const explanation = document.getElementById('explanation');

const fact = {
    statement: 'Array like an Object',
    answer: true,
    explanation: 'Array is a kind of an object with special properties'
};

statement.textContent = fact.statement;
const disable = (button) => {
    button.setAttribute('disabled', '');
};

const enable = (button) => {
    button.removeAttribute('disabled');
};

function isCorrect(guessString) {
    return guessString === fact.answer.toString();
}

for (const button of optionsButtons) {
    button.addEventListener('click', function () {
        explanation.textContent = fact.explanation;

        for (const otherButton of optionsButtons) {
            disable(otherButton);
        }

        if (isCorrect(button.value)) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });
}
