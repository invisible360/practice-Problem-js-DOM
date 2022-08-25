const cProgramming = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'C-Programming',
    id: 'c-programming',
    price: 12
}
const java = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'Java-Programming',
    id: 'java-programming',
    price: 19
}
const jsProgramming = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'JS-Programming',
    id: 'js-programming',
    price: 22
}
const phpProgramming = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'PHP-Programming',
    id: 'php-programming',
    price: 15
}
const androidProgramming = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'Android-Programming',
    id: 'android-programming',
    price: 28
}
const cSharpProgramming = {
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YyUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",

    name: 'C#-Programming',
    id: 'c#-programming',
    price: 16
}
const arrayOfObject = [cProgramming, java, jsProgramming, cSharpProgramming, androidProgramming, phpProgramming];


//function for cards dynamically 
const cards = (obj) => {
    const objToString = JSON.stringify(obj)
    const cardContainer = document.getElementById('card-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
    <div class="card">
    <img src=${obj.img} class="card-img-top" alt="...">
    <div class="card-body">
    <h5 id="${obj.id + '-course'}" class="card-title">${obj.name}</h5>
    <p class="card-text">Price: <span id="${obj.id + '-price'}">${obj.price}</span></p>
    <button id="${obj.id + '-btn'}" class="btn btn-secondary" onclick = 'addToCart(${objToString})'>Add to cart</button>
    </div>
    </div>
    </div>
    `
    cardContainer.appendChild(div);
}

for (let i = 0; i < arrayOfObject.length; i++) {
    const element = arrayOfObject[i];
    cards(element);
}


const addToCart = (obj) => {
    const objToString = JSON.stringify(obj);

    const selectedItem = parseInt(document.getElementById('selected-item').innerText);
    const newNumber = selectedItem + 1;
    document.getElementById('selected-item').innerText = newNumber;

    const courseListContainer = document.getElementById('course-name-container');
    const tableRowCourses = document.createElement('tr');
    tableRowCourses.innerHTML = `
    <td>${obj.name}</td>
    <td id="${obj.id + '-price'}" class = "course-price">${obj.price}</td>
    <td><button id="${obj.id + '-remove'}" class="border-0 bg-transparent" onclick = 'removeItem(${objToString}, event,)'><img src="images/remove.png" alt="" ></button></td>
    `
    courseListContainer.appendChild(tableRowCourses);

    const lists = document.querySelectorAll('.course-price')
    let sum = 0;
    for (const list of lists) {
        sum += parseInt(list.innerText);
    }
    document.getElementById('total-amount').innerText = sum;

}

//item remove handler
const removeItem = (obj, event) => {

    const selectedItem = parseInt(document.getElementById('selected-item').innerText);
    const newNumber = selectedItem - 1;
    document.getElementById('selected-item').innerText = newNumber;

    // removing the deleted element 
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode)

    
    // updating the price
    const removePrice = parseInt(event.target.parentNode.parentNode.parentNode.childNodes[3].innerText)
    const prevTotal = parseInt(document.getElementById('total-amount').innerText);
    const updateTotalAmount = prevTotal - removePrice;

    document.getElementById('total-amount').innerText = updateTotalAmount;


}

