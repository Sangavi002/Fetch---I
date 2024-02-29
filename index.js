let form = document.querySelector("form")
let retrieveButton = document.getElementById('retrieveData');
let displayData = document.getElementById('userDataDisplay');

form.addEventListener("submit",getData);

let name = document.getElementById('name');
let age = document.getElementById('age');

let data = JSON.parse(localStorage.getItem('User-Detail')) || [];

function getData(){
    let user = {};

    user.name = name.value,
    user.age = age.value

    data.push(user);

    localStorage.setItem('User-Detail',JSON.stringify(data));
}

retrieveButton.addEventListener('click', function() {
    let userData = JSON.parse(localStorage.getItem('User-Detail'));
    if (userData) {
        displayUserData(userData);
    } else {
        displayData.innerHTML = "No data stored yet.";
    }
});

let tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

function displayUserData(userData) {
    document.querySelector('table').style.display = 'block'
    data.forEach(element => {
        
        let tr = document.createElement('tr');
        let tdName = document.createElement('td')
        tdName.textContent = element.name;
        let tdAge = document.createElement('td')
        tdAge.textContent = element.age;

        tr.append(tdName,tdAge)
        tbody.append(tr);
    });
}