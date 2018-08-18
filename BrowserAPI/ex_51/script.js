window.onload = function getInput() {
   let JSONresponse = `{
        "title": "A New Hope", 
        "episode_id": 4, 
        "species": [
          "https://swapi.co/api/species/5/", 
          "https://swapi.co/api/species/3/", 
          "https://swapi.co/api/species/2/", 
          "https://swapi.co/api/species/1/", 
          "https://swapi.co/api/species/4/"
        ]
      }`
      const movie = JSON.parse(JSONresponse);
      const contentDiv = this.document.getElementById("JSONresponse"); 
      const title = document.createElement('h1');
      title.textContent = movie.title;
      contentDiv.appendChild(title);
      movie.species.forEach(episode => {
        let episodeLink = document.createElement('a');  
      }
      console.log(JSONresponse.episode_ID); 
      
      
      title.textContent = JSON.parse(title);
      const paragraph = document.createElement('p');
        paragraph.innerText = 'JSONresponse.episode_ID';
        div.appendChild(paragraph);
        document.body.appendChild(div); 
        let EPISODElink = this.document.createElement('a');
        EPISODElink.HREF=episode""
        

    }