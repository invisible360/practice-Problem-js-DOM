function getTextElementFromInput (id) {
    const inputField = document.getElementById (id)
    const inputData = inputField.value;
    inputField.value = '';
    return inputData;
}
function getTextElementFromTag (id) {
    const textField = document.getElementById (id)
    const textData = textField.innerText;
    return textData;
}

function stringToNumber (inputString) {
    const convertedNumber = parseFloat (inputString);
    return convertedNumber;
}

function updateAmountAdd (id, value1, value2) {
    const add = value1 + value2;
    const showField = document.getElementById (id);
    showField.innerText = add;
    return add;
}

function updateAmountSub (id, value1, value2) {
    const sub = value1 - value2;
    const showField = document.getElementById (id);
    showField.innerText = sub;
    return sub;
}


