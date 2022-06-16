let list = document.getElementById("tenCountries");
let button = document.getElementById("Btn");
let display = document.getElementById("display");
let input = document.getElementById("nameOfCountry");
let country = document.getElementById('countries')
let img = document.getElementById('img')
let region = document.getElementById('region')
let capital = document.getElementById('capital')

async function List() {
  let numberCountry = await fetch("https://restcountries.com/v3.1/all");
  return numberCountry.json();
}

let stuff = List();
stuff.then((response) => {
  let info = response.slice(0, 10);
  for(let i in info){
    let countryp = document.createElement('p')
    countryp.innerHTML = `${info[i].altSpellings[1]}`
    list.appendChild(countryp)
    let img = document.createElement('img')
    img.setAttribute('src', `${info[i].flags.png}`)
    list.appendChild(img)
    let regionP = document.createElement('p')
    regionP.innerHTML = ` ${info[i].region}`
    list.appendChild(regionP)
    let capitalp = document.createElement('p')
    capitalp.innerHTML = `${info[i].capital[0]}`
    list.appendChild(capitalp)
  }
  
  // console.log(info);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((response) => response.json())
    .then((info) => {
      
      for(let i in info){
        let countryp = document.createElement('p')
        countryp.innerHTML = `${info[i].name.common}`
        display.appendChild(countryp)
        let img = document.createElement('img')
        img.setAttribute('src', `${info[i].flags.png}`)
        display.appendChild(img)
        let regionP = document.createElement('p')
        regionP.innerHTML = ` ${info[i].region}`
        display.appendChild(regionP)
        let capitalp = document.createElement('p')
        capitalp.innerHTML = `${info[i].capital[0]}`
        display.appendChild(capitalp)
      }
      
      // console.log(info);
    });
});


