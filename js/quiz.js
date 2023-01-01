const statement = document.getElementById('statement');
const optionsButtons = document.querySelector('#options').children;
const explanation = document.getElementById('explanation');

const fact = {
    statement: 'Array like an Object',
    answer: true,
    explanation: 'Arrays are a kind of object with special properties'
};

statement.textContent = fact.statement;

function EnableDisableButton() {
    let trueButton = document.getElementsByName('true');
    trueButton[0].setAttribute('disabled', '');
}

function isCorrect(guess) {
    return 0;
}
