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

// Generates and writes Entry Log
const writeToLog = (operation, prevResult, number, result) => {
    const logEntry = {
        operation,
        prevResult,
        number,
        result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// Handle button operations
const add = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

const subtract = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

const multiply = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

const divide = () => {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult); 
}

// Event Listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);