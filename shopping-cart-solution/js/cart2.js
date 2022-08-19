function calculateCaseSubtotal(id1, id2, updatedQuantity) {
    const updatedCasePrice = updateCasePrice(id1, updatedQuantity);
    const updatedMobilePriceString = document.getElementById(id2).innerText
    const updatedMobilePrice = parseInt(updatedMobilePriceString);
    const subTotal = updatedMobilePrice + updatedCasePrice;
    return subTotal;
}

document.getElementById('plus-btn-case').addEventListener('click', function () {
    const updatedQuantity = updateMobileQuantity('quantity-case', true);
    const subTotal = calculateCaseSubtotal('update-price-case', 'update-price-mobile', updatedQuantity);
    finalCalculation(subTotal);
})

document.getElementById('minus-btn-case').addEventListener('click', function () {
    const updatedQuantity = updateMobileQuantity('quantity-case', false);

    if (updatedQuantity >= 0) {
        const subTotal = calculateCaseSubtotal('update-price-case', 'update-price-mobile', updatedQuantity);
        finalCalculation(subTotal);
    }

    else {
        alert('invalid Quantity');
        document.getElementById('quantity-case').value = 0;
    }

})

