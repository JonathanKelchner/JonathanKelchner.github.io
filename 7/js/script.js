"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNUbUumU90CqiCDBVnInWgC260Y-7_s3U",
    authDomain: "csci3054-project5-sumo.firebaseapp.com",
    projectId: "csci3054-project5-sumo",
    storageBucket: "csci3054-project5-sumo.firebasestorage.app",
    messagingSenderId: "802652125302",
    appId: "1:802652125302:web:36d6daf59468e01a960757"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function changeButtons(tempData){
    let backButton = document.querySelector(".back_button");
    backButton.classList.remove("hidden");
    backButton.setAttribute("id", "back_to_default");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    document.querySelector(".current").classList.remove("current");
    document.querySelector(".light_anchor").classList.add("dark_anchor");
    document.querySelector(".light_anchor").classList.remove("light_anchor");

    let peopleButtons = document.querySelectorAll(".twoStepButton");
    peopleButtons[0].textContent = tempData.buttons[0];
    peopleButtons[1].textContent = tempData.buttons[1];
    peopleButtons[2].textContent = tempData.buttons[2];
    peopleButtons[3].textContent = tempData.buttons[3];
}

function backClicked(){
    let backButton = document.querySelector(".back_button");
    if(backButton.id == "back_to_default"){
        window.location.reload();
    }else{
        document.querySelector("main").removeChild(document.querySelector(".tempMain"));
        document.querySelector(".card").classList.remove("hidden");
        if(backButton.id == "back_to_people"){
            document.querySelector("title").textContent = data.docs[10].data().title;
            document.querySelector("h1").textContent = data.docs[10].data().header;
        }else if(backButton.id == "back_to_sanyaku"){
            document.querySelector("title").textContent = data.docs[13].data().title;
            document.querySelector("h1").textContent = data.docs[13].data().header;
        }else if(backButton.id == "back_to_venues"){
            document.querySelector("title").textContent = data.docs[17].data().title;
            document.querySelector("h1").textContent = data.docs[17].data().header;
        }else{
            document.querySelector("title").textContent = data.docs[16].data().title;
            document.querySelector("h1").textContent = data.docs[16].data().header;
        }
        backButton.setAttribute("id", "back_to_default");
    }
}

function buildRikishi(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_people");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildGyoji(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_people");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildShimpan(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_people");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildYobidashi(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_people");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildKomusubi(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildSekiwake(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildOzeki(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildYokozuna(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildKokugikan(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_venues");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildOsaka(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_venues");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildIg(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_venues");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildFukuoka(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_venues");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p = tempData.p;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildMainPrizes(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let subheader = tempData.header2;
    let p1 = tempData.p1;
    let ul1 = tempData.ul1;
    let header3 = tempData.header3;
    let p2 = tempData.p2;
    let ul2 = tempData.ul2;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + subheader + p1 + ul1 + header3 + p2 + ul2 + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildDiplomatic(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let p = tempData.p;
    let ul1 = tempData.ul1;
    let subheader = tempData.header2;
    let ul2 = tempData.ul2;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + p + ul1 + subheader + ul2 + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildGovernmental(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let p = tempData.p;
    let ul1 = tempData.ul1;
    let subheader = tempData.header2;
    let ul2 = tempData.ul2;
    let subheader2 = tempData.header3;
    let ul3 = tempData.ul3;
    let subheader3 = tempData.header4;
    let ul4 = tempData.ul4;
    let subheader4 = tempData.header5;
    let ul5 = tempData.ul5;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + p + ul1 + subheader + ul2 + subheader2 + ul3 + subheader3 + ul4 + subheader4 + ul5 + imgContainer;
    document.querySelector("main").appendChild(div);
}

function buildPressAndBusiness(tempData){
    document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
    document.querySelector(".card").classList.add("hidden");

    document.querySelector("title").textContent = tempData.title;
    document.querySelector("h1").textContent = tempData.header;
    let img1 = tempData.img1;
    let p = tempData.p;
    let ul1 = tempData.ul1;
    let subheader = tempData.header2;
    let ul2 = tempData.ul2;
    let subheader2 = tempData.header3;
    let ul3 = tempData.ul3;
    let subheader3 = tempData.header4;
    let ul4 = tempData.ul4;
    let subheader4 = tempData.header5;
    let ul5 = tempData.ul5;
    let imgContainer = tempData.img_container;
    let div = document.createElement("div");
    div.classList.add("tempMain");
    div.innerHTML = img1 + p + ul1 + subheader + ul2 + subheader2 + ul3 + subheader3 + ul4 + subheader4 + ul5 + imgContainer;
    document.querySelector("main").appendChild(div);
}

let data;
let dataFetched = false;
let firstNum;

async function change(num){
    if(!dataFetched){
        data = await getDocs(collection(db, "data"));
        dataFetched = true;
    }

    if(firstNum === undefined){
        if(num == 0){
            changeButtons(data.docs[10].data());
        }else if(num == 1){
            changeButtons(data.docs[13].data());
        }else if(num == 2){
            changeButtons(data.docs[17].data());
        }else{
            changeButtons(data.docs[16].data());
        }
        firstNum = num;
    }else if(firstNum == 0){
        if(num == 0){
            buildRikishi(data.docs[12].data());
        }else if(num == 1){
            buildGyoji(data.docs[3].data());
        }else if(num == 2){
            buildShimpan(data.docs[15].data());
        }else{
            buildYobidashi(data.docs[18].data());
        }
    }else if(firstNum == 1){
        if(num == 0){
            buildKomusubi(data.docs[6].data());
        }else if(num == 1){
            buildSekiwake(data.docs[14].data());
        }else if(num == 2){
            buildOzeki(data.docs[9].data());
        }else{
            buildYokozuna(data.docs[19].data());
        }
    }else if(firstNum == 2){
        if(num == 0){
            buildKokugikan(data.docs[5].data());
        }else if(num == 1){
            buildOsaka(data.docs[8].data());
        }else if(num == 2){
            buildIg(data.docs[4].data());
        }else{
            buildFukuoka(data.docs[1].data());
        }
    }else{
        if(num == 0){
            buildMainPrizes(data.docs[7].data());
        }else if(num == 1){
            buildDiplomatic(data.docs[0].data());
        }else if(num == 2){
            buildGovernmental(data.docs[2].data());
        }else{
            buildPressAndBusiness(data.docs[11].data());
        }
    }
}

let buttons = document.querySelectorAll(".twoStepButton");
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        change(i);
    });
}

document.querySelector(".back_button").addEventListener("click", () => {
    backClicked();
});