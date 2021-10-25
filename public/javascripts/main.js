'use strict';

console.log('main.js is alive');

let usersList = [];
let bookingsList = [];

fetch('http://localhost:3000/users')
    .then(response => {
        return response.json();
    })
    .then(resusers => {
        usersList = resusers;
        console.log(usersList)
    });

fetch('http://localhost:3000/bookingsList')
    .then(response => {
        return response.json();
    })
    .then(resBookings => {
        let bookingsList = resBookings;
        console.log(bookingsList)
        ShowBookings(bookingsList);
    });

const Login = () => {
    const data = usersList;
    console.log(data)

    let inputName = document.getElementById('tBoxNameId').value;
    let inputPas = document.getElementById('tBoxPasId').value;

    data.users.forEach((element) => {
        if (inputName == element.name && inputPas == element.password) {
            location.href = '/bookings'
        } else {
            console.log('Invalid Username')
        }
    });
}

const ShowBookings = (dataCalendar) => {
    console.log('hej hej')

    const tBoxData = document.getElementById('tBoxBookTimeId')
    tBoxData.style.display = 'none';

    const btnConfirm = document.createElement('button');
    btnConfirm.id = 'btnConfirmId';
    btnConfirm.textContent = 'Confirm';
    btnConfirm.disabled = true;
    document.getElementById('formId').appendChild(btnConfirm);

    for (let i = 0; i < dataCalendar.week.length; i++) {

        let mybr = document.createElement('br');
        document.body.appendChild(mybr);

        const p = document.createElement('p');
        p.textContent = dataCalendar.week[i].day
        document.body.appendChild(p);

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            const btn = document.createElement('button');
            btn.textContent = "Boka " + dataCalendar.week[i].times[j].time;
            btn.style.width = "80px"
            btn.style.height = "80px"
            btn.id = i + "," + j;
            btn.className = 'btnBookClass';

            document.body.appendChild(btn);

            if (dataCalendar.week[i].times[j].booked == true) {
                btn.disabled = true;
            }
        }
    }
};

const btnSignOut = () => {
    location.href = '/login'
}