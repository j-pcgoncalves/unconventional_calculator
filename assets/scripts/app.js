const defaultResult = 0;
let currentResult = defaultResult;

const add = () => {
    currentResult += parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add);