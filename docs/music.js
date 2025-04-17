document.addEventListener('contextmenu', event => event.preventDefault());
let merch_item = [
    {
        card_image: "assets/card_image.png",
        title: "believer",
        album: 'Singles',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/radioactive.webp",
        title: "RadioActive",
        album: 'singles',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/Demons.webp",
        title: "Demons",
        album: 'Night Vision',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/Bones.webp",
        title: "Bones",
        album: 'Beyond Death',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/Demons.webp",
        title: "On the Top of world",
        album: 'Night Vision',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/Enemy.jpg",
        title: "Enemy",
        album: 'Arcane',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
    {
        card_image: "assets/Demons.webp",
        title: "Its Time",
        album: 'Night Vision',
        artist: 'Dan Reynolds',
        Url: "assets/believer.mp3"
    },
];
function unhide_me(){
    let v =document.getElementById("menu_part")
    if(v.hidden)
     v.hidden=false;
    else
    v .hidden= true;
}
let currentAudio = null;

for (let item of merch_item) {
    document.querySelector(".store-items").innerHTML += 
        `<div class="item-card" onclick="playsong('${item.Url}')">
            <div class="images"><img src="${item.card_image}" alt="${item.title}"></div>
            <div class="text">
                <h2 class="titled">${item.title}</h2>
                <h4 class="price">${item.album}</h4>
                <h4 class="price">${item.artist}</h4>
            </div>
        </div>`;
}

function show_more(){
    document.querySelector(".show-more").innerHTML = "loading";
    let timeout = setTimeout(refreshed_show, 2000);
}

function refreshed_show(){
    document.querySelector(".show-more").innerHTML = "Show more";
    alert("That is all we have right now");
}

function playsong(src){
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio(src);
    currentAudio.play();
    document.querySelector("#songs-nav").innerHTML = "believer";
}
function playsong1(src) {
    document.querySelector("#songs-nav").innerHTML = "believer";
        if (currentAudio && currentAudio.src.includes(src)) {
            if (currentAudio.paused) {
                currentAudio.play();
            } else {
                currentAudio.pause();
            }
        } else {
            if (currentAudio) {
                currentAudio.pause();
            }
            currentAudio = new Audio(src);
            currentAudio.play();
        }
        
        
}

function unhide_me(){
    let v =document.getElementById("menu_part")
    if(v.hidden){
     v.hidden=false;
        document.querySelector(".nav-bar-head").style.setProperty("--translunhide","48.75vh");}
        else{
        v .hidden= true;
        document.querySelector(".nav-bar-head").style.setProperty("--translunhide","90vh");}
}