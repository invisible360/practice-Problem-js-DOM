function getInputValue (id) {
    const inputElement = document.getElementById (id);
    const inputString = inputElement.value;
    return inputString;
}

function getElementText (id) {
    const inputElement = document.getElementById (id);
    const inputTextString = inputElement.innerText;
    return inputTextString;
}

function setValue (id, value) {
    const setElement = document.getElementById (id);
    setElement.value = value;
}
function setText (id, value) {
    const setElement = document.getElementById (id);
    setElement.innerText = value;
}

function stringToNumber (inputString) {
    const number = parseInt (inputString);
    return number;
}


function updateQuantity(id, isPlus) {
    const QuantityString = getInputValue(id);
    let Quantity = stringToNumber(QuantityString);

    if (isPlus) {
        const updateQuantity = Quantity + 1;
        setValue(id, updateQuantity);
        return updateQuantity;
    }
    else {
        const updateQuantity = Quantity - 1;
        setValue(id, updateQuantity);
        return updateQuantity;

    }

}

function updateMobilePrice(id, quantity) {

    const previousPriceField = document.getElementById(id);
    const updatedPrice = quantity * 1219;
    previousPriceField.innerText = updatedPrice;
    return updatedPrice;
}
function updateCasePrice(id, quantity) {
    
    const previousPriceField = document.getElementById(id);
    const updatedPrice = quantity * 59;
    previousPriceField.innerText = updatedPrice;
    return updatedPrice;
}

function finalCalculation (subTotal) {
    document.getElementById ('subtotal').innerText = subTotal;
    const taxString = subTotal * 0.1 ;
    const tax = parseFloat (taxString.toFixed(2)) ;
    document.getElementById ('tax').innerText = tax;
    document.getElementById ('total').innerText = subTotal + tax;
}
