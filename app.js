function reqListener(){
  var data = JSON.parse(this.responseText);
  var person1 = document.getElementById("person1");
  var person2 = document.getElementById("person2");
  var person3 = document.getElementById("person3");
  console.log("data", data);
  person1.innerHTML = " My name is " + data.name + " I am " + data.height + " inches tall " + " and weigh " + data.mass + " kilograms" + ", Born on: " + data.birth_year + ", Gender: " + data.gender;
}

var oReq1 = new XMLHttpRequest();
oReq1.addEventListener('load', reqListener);
oReq1.open('GET', 'https://swapi.co/api/people/1/');
oReq1.send();  

function reqListener2(){
  var data = JSON.parse(this.responseText);
  console.log("data", data);
  person2.innerHTML = " My name is " + data.name + " I am " + data.height + " inches tall " + " and weigh " + data.mass + " kilograms" + ", Born on: " + data.birth_year + ", Gender: " + data.gender;
}

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener('load', reqListener2);
oReq2.open('GET', 'https://swapi.co/api/people/5/');
oReq2.send();

function reqListener3(){
  var data = JSON.parse(this.responseText);
  console.log("data", data);
  person3.innerHTML = " My name is " + data.name + " I am " + data.height + " inches tall " + " and weigh " + data.mass + " kilograms" + ", Born on: " + data.birth_year + ", Gender: " + data.gender;
}

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener('load', reqListener3);
oReq3.open('GET', 'https://swapi.co/api/people/4/');
oReq3.send();

function reqListener4(){
  var data = JSON.parse(this.responseText);
  var planets = document.getElementById("planetsResult");
  console.log("data", data);
  
  for (i=0;i<10;i++){
    var planet = document.createElement("div");
    planet.innerHTML = data.results[i].name;
    planets.appendChild(planet);
  }
}

var oReq4 = new XMLHttpRequest();
oReq4.addEventListener('load', reqListener4);
oReq4.open('GET', 'https://swapi.co/api/planets/');
oReq4.send();

function reqListener5(){
  var data = JSON.parse(this.responseText);
  var films = document.getElementById("filmsResult");
  console.log("data", data);
  
  for (i=0;i<6;i++){
    var film = document.createElement("div");
    film.innerHTML = " Film Name: " + data.results[i].title + ", Episode ID: " + data.results[i].episode_id + ", Director: " + data.results[i].director;
    films.appendChild(film);
  }

}

var oReq5 = new XMLHttpRequest();
oReq5.addEventListener('load', reqListener5);
oReq5.open('GET', 'https://swapi.co/api/films/');
oReq5.send();
