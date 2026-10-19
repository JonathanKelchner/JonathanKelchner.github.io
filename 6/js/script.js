"use strict";

function peopleClicked(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let backButton = document.querySelector(".back_button");
        backButton.classList.remove("hidden");
        backButton.setAttribute("id", "back_to_default");

        document.querySelector("title").textContent = data.people.title;
        document.querySelector("h1").textContent = data.people.header;
        document.querySelector(".current").classList.remove("current");
        document.querySelector(".light_anchor").classList.add("dark_anchor");
        document.querySelector(".light_anchor").classList.remove("light_anchor");
        document.querySelector("#people").setAttribute("id", "people1");
        document.querySelector("#people1").textContent = data.people.buttons.one;
        document.querySelector("#sanyaku").setAttribute("id", "people2");
        document.querySelector("#people2").textContent = data.people.buttons.two;
        document.querySelector("#venues").setAttribute("id", "people3");
        document.querySelector("#people3").textContent = data.people.buttons.three;
        document.querySelector("#trophies").setAttribute("id", "people4");
        document.querySelector("#people4").textContent = data.people.buttons.four;
    })
    .catch((err) => {
        console.error(err);
    });
}

function sanyakuClicked(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let backButton = document.querySelector(".back_button");
        backButton.classList.remove("hidden");
        backButton.setAttribute("id", "back_to_default");

        document.querySelector("title").textContent = data.sanyaku.title;
        document.querySelector("h1").textContent = data.sanyaku.header;
        document.querySelector(".current").classList.remove("current");
        document.querySelector(".light_anchor").classList.add("dark_anchor");
        document.querySelector(".light_anchor").classList.remove("light_anchor");
        document.querySelector("#people").setAttribute("id", "sanyaku1");
        document.querySelector("#sanyaku1").textContent = data.sanyaku.buttons.one;
        document.querySelector("#sanyaku").setAttribute("id", "sanyaku2");
        document.querySelector("#sanyaku2").textContent = data.sanyaku.buttons.two;
        document.querySelector("#venues").setAttribute("id", "sanyaku3");
        document.querySelector("#sanyaku3").textContent = data.sanyaku.buttons.three;
        document.querySelector("#trophies").setAttribute("id", "sanyaku4");
        document.querySelector("#sanyaku4").textContent = data.sanyaku.buttons.four;
    })
    .catch((err) => {
        console.error(err);
    });
}

function venuesClicked(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let backButton = document.querySelector(".back_button");
        backButton.classList.remove("hidden");
        backButton.setAttribute("id", "back_to_default");

        document.querySelector("title").textContent = data.venues.title;
        document.querySelector("h1").textContent = data.venues.header;
        document.querySelector(".current").classList.remove("current");
        document.querySelector(".light_anchor").classList.add("dark_anchor");
        document.querySelector(".light_anchor").classList.remove("light_anchor");
        document.querySelector("#people").setAttribute("id", "venues1");
        document.querySelector("#venues1").textContent = data.venues.buttons.one;
        document.querySelector("#sanyaku").setAttribute("id", "venues2");
        document.querySelector("#venues2").textContent = data.venues.buttons.two;
        document.querySelector("#venues").setAttribute("id", "venues3");
        document.querySelector("#venues3").textContent = data.venues.buttons.three;
        document.querySelector("#trophies").setAttribute("id", "venues4");
        document.querySelector("#venues4").textContent = data.venues.buttons.four;
    })
    .catch((err) => {
        console.error(err);
    });
}

function trophiesClicked(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let backButton = document.querySelector(".back_button");
        backButton.classList.remove("hidden");
        backButton.setAttribute("id", "back_to_default");

        document.querySelector("title").textContent = data.trophies.title;
        document.querySelector("h1").textContent = data.trophies.header;
        document.querySelector(".current").classList.remove("current");
        document.querySelector(".light_anchor").classList.add("dark_anchor");
        document.querySelector(".light_anchor").classList.remove("light_anchor");
        document.querySelector("#people").setAttribute("id", "trophies1");
        document.querySelector("#trophies1").textContent = data.trophies.buttons.one;
        document.querySelector("#sanyaku").setAttribute("id", "trophies2");
        document.querySelector("#trophies2").textContent = data.trophies.buttons.two;
        document.querySelector("#venues").setAttribute("id", "trophies3");
        document.querySelector("#trophies3").textContent = data.trophies.buttons.three;
        document.querySelector("#trophies").setAttribute("id", "trophies4");
        document.querySelector("#trophies4").textContent = data.trophies.buttons.four;
    })
    .catch((err) => {
        console.error(err);
    });
}

function backClicked(where){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if(where == "default"){
            document.querySelector(".back_button").classList.add("hidden");

            document.querySelector("title").textContent = data.default.title;
            document.querySelector("h1").textContent = data.default.header;

            let ul = document.querySelector("ul");
            ul.children[2].classList.add("current");
            ul.children[2].children[0].classList.remove("dark_anchor");
            ul.children[2].children[0].classList.add("light_anchor");

            let liList = document.querySelector(".card").children[0].children;
            liList[0].children[0].setAttribute("id", "people");
            liList[0].children[0].textContent = data.default.buttons.one;
            liList[1].children[0].setAttribute("id", "sanyaku");
            liList[1].children[0].textContent = data.default.buttons.two;
            liList[2].children[0].setAttribute("id", "venues");
            liList[2].children[0].textContent = data.default.buttons.three;
            liList[3].children[0].setAttribute("id", "trophies");
            liList[3].children[0].textContent = data.default.buttons.four;
        }else if(where == "people"){
            document.querySelector(".back_button").setAttribute("id", "back_to_default");

            document.querySelector("title").textContent = data.people.title;
            document.querySelector("h1").textContent = data.people.header;
            document.querySelector(".card").classList.remove("hidden");
            document.querySelector("main").removeChild(document.querySelector(".tempMain"));
            let liList = document.querySelector(".card").children[0].children;
            liList[0].children[0].setAttribute("id", "people1");
            liList[0].children[0].textContent = data.people.buttons.one;
            liList[1].children[0].setAttribute("id", "people2");
            liList[1].children[0].textContent = data.people.buttons.two;
            liList[2].children[0].setAttribute("id", "people3");
            liList[2].children[0].textContent = data.people.buttons.three;
            liList[3].children[0].setAttribute("id", "people4");
            liList[3].children[0].textContent = data.people.buttons.four;
        }else if(where == "sanyaku"){
            document.querySelector(".back_button").setAttribute("id", "back_to_default");

            document.querySelector("title").textContent = data.sanyaku.title;
            document.querySelector("h1").textContent = data.sanyaku.header;
            document.querySelector(".card").classList.remove("hidden");
            document.querySelector("main").removeChild(document.querySelector(".tempMain"));
            let liList = document.querySelector(".card").children[0].children;
            liList[0].children[0].setAttribute("id", "sanyaku1");
            liList[0].children[0].textContent = data.sanyaku.buttons.one;
            liList[1].children[0].setAttribute("id", "sanyaku2");
            liList[1].children[0].textContent = data.sanyaku.buttons.two;
            liList[2].children[0].setAttribute("id", "sanyaku3");
            liList[2].children[0].textContent = data.sanyaku.buttons.three;
            liList[3].children[0].setAttribute("id", "sanyaku4");
            liList[3].children[0].textContent = data.sanyaku.buttons.four;
        }else if(where == "venues"){
            document.querySelector(".back_button").setAttribute("id", "back_to_default");

            document.querySelector("title").textContent = data.venues.title;
            document.querySelector("h1").textContent = data.venues.header;
            document.querySelector(".card").classList.remove("hidden");
            document.querySelector("main").removeChild(document.querySelector(".tempMain"));
            let liList = document.querySelector(".card").children[0].children;
            liList[0].children[0].setAttribute("id", "venues1");
            liList[0].children[0].textContent = data.venues.buttons.one;
            liList[1].children[0].setAttribute("id", "venues2");
            liList[1].children[0].textContent = data.venues.buttons.two;
            liList[2].children[0].setAttribute("id", "venues3");
            liList[2].children[0].textContent = data.venues.buttons.three;
            liList[3].children[0].setAttribute("id", "venues4");
            liList[3].children[0].textContent = data.venues.buttons.four;
        }else if(where == "trophies"){
            document.querySelector(".back_button").setAttribute("id", "back_to_default");

            document.querySelector("title").textContent = data.trophies.title;
            document.querySelector("h1").textContent = data.trophies.header;
            document.querySelector(".card").classList.remove("hidden");
            document.querySelector("main").removeChild(document.querySelector(".tempMain"));
            let liList = document.querySelector(".card").children[0].children;
            liList[0].children[0].setAttribute("id", "trophies1");
            liList[0].children[0].textContent = data.trophies.buttons.one;
            liList[1].children[0].setAttribute("id", "trophies2");
            liList[1].children[0].textContent = data.trophies.buttons.two;
            liList[2].children[0].setAttribute("id", "trophies3");
            liList[2].children[0].textContent = data.trophies.buttons.three;
            liList[3].children[0].setAttribute("id", "trophies4");
            liList[3].children[0].textContent = data.trophies.buttons.four;
        }
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildRikishi(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_people");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.rikishi.title;
        document.querySelector("h1").textContent = data.rikishi.header;
        let img1 = data.rikishi.img1;
        let subheader = data.rikishi.header2;
        let p = data.rikishi.p;
        let imgContainer = data.rikishi.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildGyoji(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_people");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.gyoji.title;
        document.querySelector("h1").textContent = data.gyoji.header;
        let img1 = data.gyoji.img1;
        let subheader = data.gyoji.header2;
        let p = data.gyoji.p;
        let imgContainer = data.gyoji.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildShimpan(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_people");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.shimpan.title;
        document.querySelector("h1").textContent = data.shimpan.header;
        let img1 = data.shimpan.img1;
        let subheader = data.shimpan.header2;
        let p = data.shimpan.p;
        let imgContainer = data.shimpan.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildYobidashi(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_people");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.yobidashi.title;
        document.querySelector("h1").textContent = data.yobidashi.header;
        let img1 = data.yobidashi.img1;
        let subheader = data.yobidashi.header2;
        let p = data.yobidashi.p;
        let imgContainer = data.yobidashi.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildKomusubi(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.komusubi.title;
        document.querySelector("h1").textContent = data.komusubi.header;
        let img1 = data.komusubi.img1;
        let subheader = data.komusubi.header2;
        let p = data.komusubi.p;
        let imgContainer = data.komusubi.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildSekiwake(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.sekiwake.title;
        document.querySelector("h1").textContent = data.sekiwake.header;
        let img1 = data.sekiwake.img1;
        let subheader = data.sekiwake.header2;
        let p = data.sekiwake.p;
        let imgContainer = data.sekiwake.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildOzeki(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.ozeki.title;
        document.querySelector("h1").textContent = data.ozeki.header;
        let img1 = data.ozeki.img1;
        let subheader = data.ozeki.header2;
        let p = data.ozeki.p;
        let imgContainer = data.ozeki.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildYokozuna(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_sanyaku");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.yokozuna.title;
        document.querySelector("h1").textContent = data.yokozuna.header;
        let img1 = data.yokozuna.img1;
        let subheader = data.yokozuna.header2;
        let p = data.yokozuna.p;
        let imgContainer = data.yokozuna.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildKokugikan(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_venues");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.kokugikan.title;
        document.querySelector("h1").textContent = data.kokugikan.header;
        let img1 = data.kokugikan.img1;
        let subheader = data.kokugikan.header2;
        let p = data.kokugikan.p;
        let imgContainer = data.kokugikan.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildOsaka(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_venues");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.osaka.title;
        document.querySelector("h1").textContent = data.osaka.header;
        let img1 = data.osaka.img1;
        let subheader = data.osaka.header2;
        let p = data.osaka.p;
        let imgContainer = data.osaka.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildIg(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_venues");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.ig.title;
        document.querySelector("h1").textContent = data.ig.header;
        let img1 = data.ig.img1;
        let subheader = data.ig.header2;
        let p = data.ig.p;
        let imgContainer = data.ig.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildFukuoka(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_venues");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.fukuoka.title;
        document.querySelector("h1").textContent = data.fukuoka.header;
        let img1 = data.fukuoka.img1;
        let subheader = data.fukuoka.header2;
        let p = data.fukuoka.p;
        let imgContainer = data.fukuoka.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildMainPrizes(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.main_prizes.title;
        document.querySelector("h1").textContent = data.main_prizes.header;
        let img1 = data.main_prizes.img1;
        let subheader = data.main_prizes.header2;
        let p1 = data.main_prizes.p1;
        let ul1 = data.main_prizes.ul1;
        let header3 = data.main_prizes.header3;
        let p2 = data.main_prizes.p2;
        let ul2 = data.main_prizes.ul2;
        let imgContainer = data.main_prizes.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + subheader + p1 + ul1 + header3 + p2 + ul2 + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildDiplomatic(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.diplomatic.title;
        document.querySelector("h1").textContent = data.diplomatic.header;
        let img1 = data.diplomatic.img1;
        let p = data.diplomatic.p;
        let ul1 = data.diplomatic.ul1;
        let subheader = data.diplomatic.header2;
        let ul2 = data.diplomatic.ul2;
        let imgContainer = data.diplomatic.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + p + ul1 + subheader + ul2 + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildGovernmental(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.governmental.title;
        document.querySelector("h1").textContent = data.governmental.header;
        let img1 = data.governmental.img1;
        let p = data.governmental.p;
        let ul1 = data.governmental.ul1;
        let subheader = data.governmental.header2;
        let ul2 = data.governmental.ul2;
        let subheader2 = data.governmental.header3;
        let ul3 = data.governmental.ul3;
        let subheader3 = data.governmental.header4;
        let ul4 = data.governmental.ul4;
        let subheader4 = data.governmental.header5;
        let ul5 = data.governmental.ul5;
        let imgContainer = data.governmental.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + p + ul1 + subheader + ul2 + subheader2 + ul3 + subheader3 + ul4 + subheader4 + ul5 + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

function buildPressAndBusiness(){
    fetch("js/twoStep.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        document.querySelector(".back_button").setAttribute("id", "back_to_trophies");
        document.querySelector(".card").classList.add("hidden");

        document.querySelector("title").textContent = data.press.title;
        document.querySelector("h1").textContent = data.press.header;
        let img1 = data.press.img1;
        let p = data.press.p;
        let ul1 = data.press.ul1;
        let subheader = data.press.header2;
        let ul2 = data.press.ul2;
        let subheader2 = data.press.header3;
        let ul3 = data.press.ul3;
        let subheader3 = data.press.header4;
        let ul4 = data.press.ul4;
        let subheader4 = data.press.header5;
        let ul5 = data.press.ul5;
        let imgContainer = data.press.img_container;
        let div = document.createElement("div");
        div.classList.add("tempMain");
        div.innerHTML = img1 + p + ul1 + subheader + ul2 + subheader2 + ul3 + subheader3 + ul4 + subheader4 + ul5 + imgContainer;
        document.querySelector("main").appendChild(div);
    })
    .catch((err) => {
        console.error(err);
    });
}

document.querySelectorAll("button")
.forEach((button) => {
    button.addEventListener("click", (event) => {
        if(event.target.id == "people"){
            peopleClicked();
        }else if(event.target.id == "sanyaku"){
            sanyakuClicked();
        }else if(event.target.id == "venues"){
            venuesClicked();
        }else if(event.target.id == "trophies"){
            trophiesClicked();
        }else if(event.target.id == "back_to_default"){
            backClicked("default");
        }else if(event.target.id == "back_to_people"){
            backClicked("people");
        }else if(event.target.id == "back_to_sanyaku"){
            backClicked("sanyaku");
        }else if(event.target.id == "back_to_venues"){
            backClicked("venues");
        }else if(event.target.id == "back_to_trophies"){
            backClicked("trophies");
        }else if(event.target.id == "people1"){
            buildRikishi();
        }else if(event.target.id == "people2"){
            buildGyoji();
        }else if(event.target.id == "people3"){
            buildShimpan();
        }else if(event.target.id == "people4"){
            buildYobidashi();
        }else if(event.target.id == "sanyaku1"){
            buildKomusubi();
        }else if(event.target.id == "sanyaku2"){
            buildSekiwake();
        }else if(event.target.id == "sanyaku3"){
            buildOzeki();
        }else if(event.target.id == "sanyaku4"){
            buildYokozuna();
        }else if(event.target.id == "venues1"){
            buildKokugikan();
        }else if(event.target.id == "venues2"){
            buildOsaka();
        }else if(event.target.id == "venues3"){
            buildIg();
        }else if(event.target.id == "venues4"){
            buildFukuoka();
        }else if(event.target.id == "trophies1"){
            buildMainPrizes();
        }else if(event.target.id == "trophies2"){
            buildDiplomatic();
        }else if(event.target.id == "trophies3"){
            buildGovernmental();
        }else if(event.target.id == "trophies4"){
            buildPressAndBusiness();
        }
    });
});