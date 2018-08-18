window.onload = function clickyClick(){
const apiURL = 'https://swapi.co/api/films/';
console.log(pre-fetch)
fetch(apiURL)
  .then(function(response) {
      console.log("In response")
    return response.json();
  })
  .then(function(data) {
    console.log("In data");
    console.log(data);
    console.log(data.results[0]);
    data.results.forEach(element => {
        let contentDiv = document.getElementById("content");
        let nextDiv = document.createElement("div");
        nextDiv.innerHTML = "title" + element.title + "<br> episode_id:" + element.episode
        contentDiv.appendChild(nextDiv);
    });
  });
  console.log(data.results[0].title);
   console.log(show.show.name);
    console.log(show.show.premiered); 
    console.log(show.show.image.original);
}