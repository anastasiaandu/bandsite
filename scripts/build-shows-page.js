//create an array of shows
const shows = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA'
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA'
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA'
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA'
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Press Club',
        location: 'San Francisco, CA'
    }
];


// function getObjectKey(object, value) {
//     const heading = Object.keys(object).find((key) => {
//         return object[key] === value;
//     });
//     return heading;
// }

// console.log(getObjectKey(shows[0], 'Ronald Lane'));


//get the parent to which the shows would be appended
const showSection = document.querySelector('.shows__body');


//table head
const tableHead = document.createElement('ul');
tableHead.classList.add('shows__detail', 'shows__detail--top');

const tableHeadDate = document.createElement('li');
tableHeadDate.classList.add('shows__detail-header', 'shows__detail-header--date');
tableHeadDate.innerText = 'Date';
tableHead.appendChild(tableHeadDate);

const tableHeadVenue = document.createElement('li');
tableHeadVenue.classList.add('shows__detail-header');
tableHeadVenue.innerText = 'Venue';
tableHead.appendChild(tableHeadVenue);

const tableHeadLocation = document.createElement('li');
tableHeadLocation.classList.add('shows__detail-header');
tableHeadLocation.innerText = 'Location';
tableHead.appendChild(tableHeadLocation);


//append table head to webpage
showSection.appendChild(tableHead);


//create a function to display each show
function displayShow() {

    shows.forEach((show) => {
        //table body
        const tableBody = document.createElement('ul');
        tableBody.classList.add('shows__container');

        //table list for date
        const tableListDate = document.createElement('li');
        tableBody.appendChild(tableListDate);

        const showDate = document.createElement('div');
        showDate.classList.add('shows__detail');
        showDate.innerText = 'Date';
        tableListDate.appendChild(showDate);

        const showDateInfo = document.createElement('div');
        showDateInfo.classList.add('shows__date');
        showDateInfo.innerText = show.date;
        tableListDate.appendChild(showDateInfo);

        //table list for venue
        const tableListVenue = document.createElement('li');
        tableBody.appendChild(tableListVenue);

        const showVenue = document.createElement('div');
        showVenue.classList.add('shows__detail');
        showVenue.innerText = 'Venue';
        tableListVenue.appendChild(showVenue);

        const showVenueInfo = document.createElement('div');
        showVenueInfo.classList.add('shows__venue');
        showVenueInfo.innerText = show.venue;
        tableListVenue.appendChild(showVenueInfo);

        //table list for location
        const tableListLocation = document.createElement('li');
        tableBody.appendChild(tableListLocation);

        const showLocation = document.createElement('div');
        showLocation.classList.add('shows__detail');
        showLocation.innerText = 'Location';
        tableListLocation.appendChild(showLocation);

        const showLocationInfo = document.createElement('div');
        showLocationInfo.classList.add('shows__location');
        showLocationInfo.innerText = show.location;
        tableListLocation.appendChild(showLocationInfo);

        //table list for button
        const tableListButton = document.createElement('li');
        tableBody.appendChild(tableListButton);

        const button = document.createElement('a');
        button.setAttribute('href', 'https://www.bandsintown.com/');
        button.classList.add('shows__button');
        button.innerText = 'Buy Tickets';
        tableListButton.appendChild(button);

        //append comment to webpage
        showSection.appendChild(tableBody);
        console.log(tableBody);
    });
}


//call the function to display each show on the shows page
displayShow();


//html comment template
/* <ul class="shows__detail shows__detail--top">
        <li class="shows__detail-header shows__detail-header--date">
            Date
        </li>
        <li class="shows__detail-header">
            Venue
        </li>
        <li class="shows__detail-header">
            Location
        </li>
    </ul> 
    <ul class="shows__container">
        <li>
            <div class="shows__detail">Date</div>
            <div class="shows__date">Mon Sept 06 2021</div>
        </li>
        <li>
            <div class="shows__detail">Venue</div>
            <div class="shows__venue">Ronald Lane </div>
        </li>
        <li>
            <div class="shows__detail">Location</div>
            <div class="shows__location">San Francisco, CA</div>
        </li>
        <li>
            <a href="#" class="shows__button">Buy Tickets</a>
        </li>
    </ul>*/
