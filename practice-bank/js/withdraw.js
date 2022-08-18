document.getElementById('withdraw-btn').addEventListener('click', function () {
    //getting withdraw amount and converted into number
    const withdrawAmount = getTextElementFromInput('withdraw-field');
    const withdrawStringConvertedIntoNumber = stringToNumber(withdrawAmount);

    if ((withdrawAmount === '') || (withdrawStringConvertedIntoNumber < 0)) {
        alert('Provive a valid amount');
    }

    else {
        //getting withdraw field and converted into number
        const previousAmount = getTextElementFromTag('withdraw-amount')
        const previousAmountStringConvertedIntoNumber = stringToNumber(previousAmount);

        // update withdraw amount 
        const withdrawAmountUpdate = updateAmountAdd('withdraw-amount', previousAmountStringConvertedIntoNumber, withdrawStringConvertedIntoNumber);

        const balanceAmount = getTextElementFromTag('balance-amount');
        const balanceAmountNumber = stringToNumber(balanceAmount);
        const updateBalance = updateAmountSub('balance-amount', balanceAmountNumber, withdrawStringConvertedIntoNumber);
    }


});