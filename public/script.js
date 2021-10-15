document.getElementById("Luke Skywalker").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people/1";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    getCharBio(json);
  });
});

document.getElementById("Darth Vader").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people/4";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    getCharBio(json);
  });
});

document.getElementById("Princess Leia").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people/5";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    getCharBio(json);
  });
});

document.getElementById("Chewbacca").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people/13";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    getCharBio(json);
  });
});

document.getElementById("Han Solo").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://swapi.dev/api/people/14";
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    getCharBio(json);
  });
});



function getCharBio(json) {
  let results = "";
  results += "<h1 class='char-name'>Name: " + json.name + "</h1>";
  results += "<p class='char-height'>Height: " + json.height + " cm</p>";
  results += "<p class='char-mass'>Weight: " + json.mass + " kg</p>";
  results += "<p class='char-hair_color'>Hair Color: "+ json.hair_color + "</p>";
  results += "<p class='char-eye_color'> Eye Color: " +  json.eye_color + "</p>";
  results += "<p class = 'char-birth-year'> Birth Year: " + json.birth_year + "</p>";
  results += "<p class='char-gender'> Gender: " + json.gender + "</p>";
  document.getElementById("data-display").innerHTML = results;

  url = json.homeworld;
  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json.name);
    let planet = "";
    planet +="<p class='char-homeworld'>Homeworld: " + json.name + "</p>";
    document.getElementById("data-display").innerHTML += planet;
  })



}
