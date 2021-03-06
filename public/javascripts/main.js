'use strict';

console.log('main.js is alive');

let usersList = [];
let bookingsList = [];

fetch('http://localhost:3000/api/users')
    .then(response => {
        return response.json();
    })
    .then(resUsers => {
        usersList = resUsers;
        console.log(usersList);
    });

fetch('http://localhost:3000/api/bookingsList')
    .then(response => {
        return response.json();
    })
    .then(resBookings => {
        bookingsList = resBookings;
        console.log(bookingsList);
    });

const Login = () => {
    const data = usersList;

    let inputName = document.getElementById('tBoxNameId').value;
    let inputPas = document.getElementById('tBoxPasId').value;

    data.users.forEach((element) => {
        if (inputName == element.name && inputPas == element.password) {
            location.href = '/bookings';
        } else {
            console.log('Invalid Username');
        }
    });
}

const btnShowBookings = () => {
    // const tBoxData = document.getElementById('tBoxBookTimeId')
    // tBoxData.style.display = 'none';

    // const btnConfirm = document.createElement('button');
    // btnConfirm.id = 'btnConfirmId';
    // btnConfirm.textContent = 'Confirm';
    // btnConfirm.disabled = true;
    // document.getElementById('formId').appendChild(btnConfirm);

    const dataCalendar = bookingsList;

    for (let i = 0; i < dataCalendar.week.length; i++) {

        let mybr = document.createElement('br');
        document.getElementById('calendar').appendChild(mybr);

        const p = document.createElement('p');
        p.textContent = dataCalendar.week[i].day;
        document.getElementById('calendar').appendChild(p);

        for (let j = 0; j < dataCalendar.week[i].times.length; j++) {

            const btn = document.createElement('button');
            btn.textContent = "Book " + dataCalendar.week[i].times[j].time;
            btn.style.width = "80px";
            btn.style.height = "80px";
            btn.id = i + "," + j;
            btn.className = 'btnBookClass';

            document.getElementById('calendar').appendChild(btn);

            // if (dataCalendar.week[i].times[j].booked == true) {
            //     btn.disabled = true;
            // }
        }
    }
    document.getElementById('btnShowBookingsId').disabled = true;
    document.getElementById('btnHideBookingsId').disabled = false;
};

const btnHideBookings = () => {
    document.getElementById('calendar').innerHTML = '';
    document.getElementById('btnShowBookingsId').disabled = false;
    document.getElementById('btnHideBookingsId').disabled = true;
}
const btnSignOut = () => {
    location.href = '/';
}