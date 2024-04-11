let temp        = document.getElementById("temp");
let icon        = document.getElementById("icon");
let description = document.getElementById("description");
let btn         = document.querySelector(".btn");
let nomVille    = document.getElementById("nomVille");
let vitesseVent = document.getElementById("vent");
let humidite    = document.getElementById("humidite");
let pression    = document.getElementById("pression");
let visibilte   = document.getElementById("visibilite");

let url = "";

function date (){
    let date = new Date();
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    let jour = jours[date.getDay()];
    mois = mois[date.getMonth()];
    let annee = date.getFullYear();
    let heure = date.getHours();
    let minute = date.getMinutes();
    document.getElementById("heure").innerText = `${jour} ${date.getDate()} ${mois} ${annee}\n ${heure}:${minute}`;

}

function temperature(data){
    temp.textContent           = Math.round(data.main.temp) + " °C";
    icon.innerHTML             = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="taile"/>` ;
    nomVille.innerText         = `${data.name}`;
    description.innerHTML      = data.weather[0].description;
    vitesseVent.innerText      = data.wind.speed + " m/s"
    humidite.innerText         = data.main.humidity + "%"
    pression.innerText         = data.main.pressure + " hpa"
    visibilte.innerText        = (data.visibility /1000) + " km";
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let ville = document.getElementById("ville").value;
    url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=9c30929e5bbdfd1a6ef29f5f97cc9142&units=metric&lang=fr`;
    fetch(url)
        .then(reponse =>{
            if(reponse.cod !== 200){
                temp.textContent      = "Ville introuvable";
                icon.innerHTML        = "";
                nomVille.innerText    = "";
                description.innerHTML = ""; 
                vitesseVent.innerText = "";
                humidite.innerText    = "";
                pression.innerText    = "";
                visibilte.innerText   = "";
            }
            return reponse.json();
        })
        .then(data => {
            temperature(data);
            date();
        })  
});

