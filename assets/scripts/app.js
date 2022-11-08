let currentResult = 0;
let logEntries = [];

// Gets input from input field
const getUserNumberInput = () => {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber) => {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // From vendor.js
}

// Handle button operations
const add = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries[0]);
}

const subtract = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);  
}

// Event Listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);