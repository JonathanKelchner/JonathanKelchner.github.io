"use strict";

let button = document.querySelector("button");
button.addEventListener("click", function() {
    fetch("js/boardingData.json")
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        document.querySelector("title").textContent = data.title;
        document.querySelector("#styleName").textContent = data.header;
        document.querySelector("#heroTitle").textContent = data.hero.headline;
        document.querySelector("#heroDesc").textContent = data.hero.description;
        document.querySelector(".hero").style.setProperty("--hero-img", `url(${data.hero.image})`);
        document.querySelector("#sec1Title").textContent = data.sections.overview.title;
        document.querySelector("#sec1Subtitle").textContent = data.sections.overview.subtitle;
        let h3 = document.querySelectorAll("h3");
        let p = document.querySelectorAll(".card p");
        h3[0].textContent = data.sections.overview.cards[0].title;
        p[0].textContent = data.sections.overview.cards[0].description;
        h3[1].textContent = data.sections.overview.cards[1].title;
        p[1].textContent = data.sections.overview.cards[1].description;
        h3[2].textContent = data.sections.overview.cards[2].title;
        p[2].textContent = data.sections.overview.cards[2].description;
        document.querySelector("#sec2Title").textContent = data.sections.equipment.title;
        document.querySelector("#sec2Subtitle").textContent = data.sections.equipment.subtitle;
        h3[3].textContent = data.sections.equipment.cards[0].title;
        p[3].textContent = data.sections.equipment.cards[0].description;
        h3[4].textContent = data.sections.equipment.cards[1].title;
        p[4].textContent = data.sections.equipment.cards[1].description;
        h3[5].textContent = data.sections.equipment.cards[2].title;
        p[5].textContent = data.sections.equipment.cards[2].description;
    })
    .catch(function(err) {
        console.error(err);
    });
});
