const aeroPlane = {
    img: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    name: 'Plane',
    shortDiscription: 'By air is always offers a quick and comfortable journey. So cositng may be bit higher than other transport mood',
    farePerKilo: 10,
    maxCapacity: 100
}
const bus = {
    img: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: 'Bus',
    shortDiscription: 'A journey by bus is an adventurous experience for someone. So, I decided to travel to Kashmir by bus.',
    farePerKilo: 4,
    maxCapacity: 40
}
const bus2 = {
    img2: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    img: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: 'Bus',
    shortDiscription: 'A journey by bus is an adventurous experience for someone. So, I decided to travel to Kashmir by bus.',
    farePerKilo: 5,
    maxCapacity: 30
}
const car = {
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    img2: "https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    name: 'Car',
    shortDiscription: 'There are many ways to keep everyone entertained and happy while on a long car journey.',
    farePerKilo: 6,
    maxCapacity: 4
}
const cng = {
    img: "https://images.unsplash.com/photo-1564291886459-a39ad7415125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXV0byUyMHJpY2tzaGF3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    img2: "https://images.unsplash.com/photo-1494114685051-b9989320801f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80",
    name: 'CNG',
    shortDiscription: 'In a city where public transport has never been up to the mark or up to the numbers needed against the demand.',
    farePerKilo: 3,
    maxCapacity: 3
}

const arrayOfObject = [aeroPlane, bus, car, cng, bus2];

//function to create cards
const cards = obj => {
    const cardContainer = document.getElementById('card-container');
    const div = document.createElement('div');
    const objToString = JSON.stringify(obj);// converting obj into string

    div.innerHTML = `
    <div class="col">
        <div class="card h-100">
            <img src= ${obj.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Transport Mood: ${obj.name} </h5>
                <p class="card-text">${obj.shortDiscription}</p>
                <div class="d-flex align-items-center justify-content-start">
                    <p class="text-muted">Fare Per Kilo: <span class="text-black">$${obj.farePerKilo}</span></p>
                    <p class="text-muted ms-3">Capacity: <span class="text-black">${obj.maxCapacity}</span></p>
                </div>

                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick = 'handleBook(${objToString})'>Book Now</button>                 
            </div>
        </div>
    </div>
    `
    cardContainer.appendChild(div);
}



//function to use modal as dynamic
const handleBook = (obj) => {

    const objToString = JSON.stringify(obj);
    const modalContainer = document.getElementById('modal-container');

    //parent er id er moddeho o innerHTML lekha jay
    modalContainer.innerHTML = `
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Transport Mode: ${obj.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="card">
            <img src=${obj.img2} class="card-img-top" alt="...">
            <div class="card-body">
                 <h5 class="card-title">${obj.name}</h5>

                 <div class="d-flex align-items-center justify-content-start">
                    <p class="text-muted">Fare Per Kilo: $<span id="fare-per-kilo" class="text-black">${obj.farePerKilo}</span></p>
                    <p class="text-muted ms-3">Capacity: <span class="text-black">${obj.maxCapacity}</span></p>
                </div>

                <div>
                    <h6>Fare: <span id="fare"></span> </h6>
                    <h6>Tax (5%): <span id="tax"></span> </h6>
                    <h6>Total-Cost: <span id="total"></span> </h6>
                </div>

                <div class="input-group mb-3">
                    <input id="distance-input" type="number" class="form-control" placeholder="Distance to travel" aria-describedby="basic-addon1">
                    <input id="vehicle-input" type="number" class="form-control" placeholder="How Many Vehicle need?" aria-describedby="basic-addon1">
                </div>

                <div class="d-flex justify-content-center ">
                    <button class="btn btn-primary" onclick='calculation(${objToString})'>Calculate Total Cost</button>
                </div>
            </div>
         </div>
    </div>

    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
    </div>
`

}

//function to add event handler on calculate button
const calculation = (obj) => {
    const farePerKilo = parseInt(document.getElementById('fare-per-kilo').innerText);
    const distance = parseInt(document.getElementById('distance-input').value);
    const requiredVheicle = parseInt(document.getElementById('vehicle-input').value);
    // console.log (farePerKilo, distance, requiredVheicle);
    const fare = farePerKilo * distance * requiredVheicle;
    if (isNaN(fare)) {
        alert("insert any number");
        document.getElementById('distance-input').value = '';
        document.getElementById('vehicle-input').value = '';
    }
    else {
        document.getElementById('fare').innerText = parseInt(fare);
        const tax = fare * 0.05;
        document.getElementById('tax').innerText = parseInt(tax);
        document.getElementById('total').innerText = parseInt(fare + tax);
    }
}
//printing cards
for (let i = 0; i < arrayOfObject.length; i++) {
    const element = arrayOfObject[i];
    cards(element);

}

//search
document.getElementById('search-btn').addEventListener('click', function () {
    const searchTextField = document.getElementById('search-text');
    const searchTextCamel = searchTextField.value;
    const searchText = searchTextCamel.toLowerCase();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    const nameOfTransport = [];
    for (let i = 0; i < arrayOfObject.length; i++) {
        const element = arrayOfObject[i];
        const lowerCase = element.name.toLowerCase();
        nameOfTransport.push(lowerCase);
        if (searchText === lowerCase) {
            cards(arrayOfObject[i]);  
        }
        //eita pore kono ek somoy korbone
        /* else{
            
            alert ('no result found')
            
        } */
    }
});