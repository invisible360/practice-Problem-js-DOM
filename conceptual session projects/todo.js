let count = 0; //global
document.getElementById('button-addon2').addEventListener('click', function () {
    const inputText = getTextFromInputField('input-text-field');

    if (inputText === '') {
        alert('Please Provide description')
    }
    else {
        postTextInsideTableRow('table-container', inputText);

    }

});

function getTextFromInputField(inputId) {
    const getInputTextElement = document.getElementById(inputId);
    const getInputText = getInputTextElement.value;
    getInputTextElement.value = '';
    return getInputText;
}

function postTextInsideTableRow(inputId, inputText) {
    const tableContainer = document.getElementById(inputId);
    const createRowElement = document.createElement('tr');
    count += 1;
    createRowElement.innerHTML = `
    <td scope="row" class = 'text-start'>${count}</td>
    <td class = 'text-center'>${inputText}</td>
    <td class = 'text-end w-25'>
    <button class="btn btn-danger delete-btn">Delete</button>
    <button class="btn btn-success done-btn">Done</button>
    </td>
    `;

    tableContainer.appendChild(createRowElement);

    deleteDoneAction('delete-btn', 'done-btn');
}

function deleteDoneAction(id1, id2) {
    const deletbtns = document.getElementsByClassName(id1);
    const donebtns = document.getElementsByClassName(id2);

    for (const deletbtn of deletbtns) {
        deletbtn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.classList.add('d-none');
        })

    }

    for (const donebtn of donebtns) {
        donebtn.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.classList.add('text-decoration-line-through');
        })

    }
}