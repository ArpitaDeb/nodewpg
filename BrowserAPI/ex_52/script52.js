window.onload = function () {
    console.log('loaded');

    const apiURL = 'https://swapi.co/api/films/';

    fetch(apiURL)
        .then(function (response) {
            return response.json();
            console.log(response);
        })
        .then(function (data) {

            data.results.forEach(function (element, index) {
                console.log('the title is: ' + element.title);
                console.log('the episode id is: ' + element.episode_id);
                console.log('the release date is: ' + element.release_date);
        
const div = document.createElement ('div');

div.textContent = 'the title is: ' + element.title;
var body = document.querySelector ('body');
body.appendChild(div);

const divNext = document.createElement ('div');

divNext.textcontent = 'the episode id is: ' + element.episode_id;
var body = document.querySelector ('body');
body.appendChild(divNext);
            })
        })
    }