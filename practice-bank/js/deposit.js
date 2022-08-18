document.getElementById('deposit-btn').addEventListener('click', function () {
    //getting deposit amount and converted into number
    const depositAmount = getTextElementFromInput('deposit-field');
    const depositedStringConvertedIntoNumber = stringToNumber(depositAmount);

    if ((depositAmount === '') || (depositedStringConvertedIntoNumber < 0)) {
        alert('Provive a valid amount');
    }

    else {
        //getting deposit field and converted into number
        const previousAmount = getTextElementFromTag('deposit-amount')
        const previousAmountStringConvertedIntoNumber = stringToNumber(previousAmount);

        // update deposit amount 
        const depositAmountUpdate = updateAmountAdd('deposit-amount', previousAmountStringConvertedIntoNumber, depositedStringConvertedIntoNumber);

        const balanceAmount = getTextElementFromTag('balance-amount');
        const balanceAmountNumber = stringToNumber(balanceAmount);
        const updateBalance = updateAmountAdd('balance-amount', depositedStringConvertedIntoNumber, balanceAmountNumber);
    }

});