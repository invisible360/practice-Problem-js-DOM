/* প্রাকটিস প্রব্লেম 

একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা। */

document.getElementById('double-btn').addEventListener('click', function () {

    const inputString = getInputStringFromUser('input-value');
    const inputNumber = stringToNumber(inputString);

    if ((inputString === '') || (Number.isNaN(inputNumber) === true)) {
        alert('Please enter a number');
    }

    else {
        const newDoubleInput = inputNumber * 2;
        setNewValue(newDoubleInput, 'updated-value');
    }

});

document.getElementById('triple-btn').addEventListener('click', function () {

    const inputString = getInputStringFromUser('input-value');
    const inputNumber = stringToNumber(inputString);
    console.log(inputNumber);

    if ((inputString === '') || (Number.isNaN(inputNumber) === true)) {
        alert('Please enter a number');
    }

    else {
        const newTripleInput = inputNumber * 3;
        setNewValue(newTripleInput, 'updated-value');
    }



})


function getInputStringFromUser(id) {
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    inputElement.value = '';
    return inputString;
}

function stringToNumber(inputString) {
    const convertedNumber = parseFloat(inputString);
    return convertedNumber;
}

function setNewValue(value, id) {
    const element = document.getElementById(id);
    element.innerText = value;

}