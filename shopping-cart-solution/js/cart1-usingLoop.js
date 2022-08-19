const plusBtns = document.getElementsByClassName('btn-plus');
const minusBtns = document.getElementsByClassName('btn-minus');
const quantityFields = document.getElementsByClassName('quantity');
const updatedPriceFields = document.getElementsByClassName('update-price');

//ei part tuku dynamic korar cesta korte hobe
let val1 = parseInt(updatedPriceFields[0].innerText);
let val2 = parseInt(updatedPriceFields[1].innerText);

for (let i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener('click', function () {
        const quantityElement = quantityFields[i];
        const quantityInNumber = parseInt(quantityElement.value);
        const updatedQuantity = quantityInNumber + 1;
        quantityElement.value = updatedQuantity;

        const priceElement = updatedPriceFields[i];
        const priceInNumber = parseInt(priceElement.innerText);



        for (let j = 1; j <= updatedQuantity; j++) {

            if (priceInNumber === 1219 * j) {
                val1 = updatedQuantity * 1219;
                priceElement.innerText = val1;


            }
            else if (priceInNumber === 59 * j) {
                val2 = updatedQuantity * 59;
                priceElement.innerText = val2;


            }
        }

        let subtotal = val1 + val2;
        document.getElementById('subtotal').innerText = subtotal;

        let tax = parseFloat((subtotal * 0.1).toFixed(2));

        document.getElementById('tax').innerText = tax;

        let total = subtotal + tax;

        document.getElementById('total').innerText = total;



    })
}


for (let i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener('click', function () {
        const quantityElement = quantityFields[i];
        const quantityInNumber = parseInt(quantityElement.value);
        const updatedQuantity = quantityInNumber - 1;
        quantityElement.value = updatedQuantity;

        const priceElement = updatedPriceFields[i];
        const priceInNumber = parseInt(priceElement.innerText);



        for (let j = updatedQuantity; j >= 1; j--) {

            if (priceInNumber === 1219 * (j + 1)) {
                val1 = updatedQuantity * 1219;
                priceElement.innerText = val1;

            }
            else if (priceInNumber === 59 * (j + 1)) {
                val2 = updatedQuantity * 59;
                priceElement.innerText = val2;

            }
        }

        console.log(val1, val2)
        document.getElementById('subtotal').innerText = val1 + val2;

        //negative number validation
        if (updatedQuantity < 1) {
            alert('Minimum Quantity 1');
            quantityElement.value = 1;

        }

    });
}




