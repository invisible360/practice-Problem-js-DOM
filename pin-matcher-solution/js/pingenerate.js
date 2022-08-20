function getPin() {
    const randomPin = Math.round(Math.random() * 10000);
    const makePinString = randomPin + '';
    if (makePinString.length === 4) {
        return randomPin;
    }
    else {
        return getPin();
    }
}

document.getElementById('pin-generate-btn').addEventListener('click', function () {
    const generatePin = getPin();
    document.getElementById('display-generated-pin').value = generatePin;

});

document.getElementById('matcher-body').addEventListener('click', function (event) {
    const character = event.target.innerText;
    const displayField = document.getElementById('display-digit');
    const previousCharacter = displayField.value;//new character assign korar agei previous character niye nite hobe

    if (character === 'C') {
        displayField.value = '';
    }
    else if (character === '<') {
        const splitCharacter = previousCharacter.split('');
        splitCharacter.pop();
        const joinCharacter = splitCharacter.join('');
        displayField.value = joinCharacter;
    }

    else {
        const currentCharacters = previousCharacter + character;
        displayField.value = currentCharacters;
    }

});

document.getElementById('submit-btn').addEventListener('click', function () {

    const getInputElement = document.getElementById('display-digit');
    const getTypedValue = getInputElement.value;

    const randomPinElement = document.getElementById('display-generated-pin');
    const randomPin = randomPinElement.value;


    if (getTypedValue === '') {

        alert ('Generate a Pin and then Typed it');
    }

    else if (getTypedValue === randomPin) {
        document.getElementById('pin-matched').style.display = 'block';
        document.getElementById('pin-not-mathced').style.display = 'none';
    }
    else {
        document.getElementById('pin-not-mathced').style.display = 'block';
        document.getElementById('pin-matched').style.display = 'none';

        const tryLeftElement = document.getElementById('try-left');
        const tryLeftElementString = tryLeftElement.innerText;
        const tryLeft = parseInt(tryLeftElementString);
        const newTryLeft = tryLeft - 1;
        tryLeftElement.innerText = newTryLeft;

        if (newTryLeft < 1) {
            document.getElementById('submit-btn').setAttribute('disabled', true)
            document.getElementById('submit-btn').style.backgroundColor = 'red';

            tryLeftElement.innerHTML = 0;
            alert('You reached at your maximum attempt');
        }
        // console.log (newTryLeft);


    }

})