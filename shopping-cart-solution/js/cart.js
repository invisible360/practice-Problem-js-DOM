function calculateMobileSubtotal (id1, id2, updatedQuantity) {
    const updatedMobilePrice = updateMobilePrice(id1, updatedQuantity);
    const updatedCasePriceString = document.getElementById (id2).innerText
    const updatedCasePrice = parseInt (updatedCasePriceString);
    const subTotal = updatedMobilePrice + updatedCasePrice;
    return subTotal;
}


document.getElementById('plus-btn-mobile').addEventListener('click', function () {
    const updatedQuantity = updateQuantity('quantity-mobile', true);
    const subTotal = calculateMobileSubtotal ('update-price-mobile', 'update-price-case',updatedQuantity);
    finalCalculation (subTotal);
    
})

document.getElementById('minus-btn-mobile').addEventListener('click', function () {
    const updatedQuantity = updateQuantity('quantity-mobile', false);
    
    if (updatedQuantity >= 0) {
        const subTotal = calculateMobileSubtotal ('update-price-mobile', 'update-price-case',updatedQuantity);
        finalCalculation (subTotal);
    }

    else {
        alert('invalid Quantity');
        document.getElementById('quantity-mobile').value = 0;
    }

})