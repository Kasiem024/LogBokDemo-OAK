'use strict';

console.log('main.js is alive');

let cars = [];

fetch('http://localhost:3000/users')
    .then(response => {
        return response.json();
    })
    .then(anka => {
        cars = anka;
        console.log(cars)
    });

let counter = 0;

const Login = () => {
    const data = users.response;

    let inputName = document.getElementById('tBoxNameId').value;

    // "p" will be used to inform user of invalid input in inputName
    // style.display = 'none' essentially deletes the element
    const p = document.createElement('p');
    p.style.display = 'none';
    document.getElementById('login').appendChild(p);

    data.users.forEach((element) => {
        if (inputName == element.name) {

            const tBoxNamn = document.getElementById('tBoxNameId')

            // Adding to cookie the users name
            document.cookie = 'user=' + tBoxNamn.value;

            location.href = '/booking';
        } else {
            if (counter < 1) {
                // This in combination with above code concerning "p"
                // Makes it so "p" is only printed once per button click
                counter++;
                p.textContent = 'Invalid username, try again!'
                p.style.display = 'block';
                document.getElementById('login').appendChild(p);
            }
        }
    });
}