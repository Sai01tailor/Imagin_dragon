document.addEventListener('contextmenu', event => event.preventDefault());
let merch_item = [
    {
        card_image: "/assets/card_image.png",
        title: "Title",
        album: 'album',
        artist: 'artist',
        Url: "believer.mp3"
    },
    {
        card_image: "/assets/card_image.png",
        title: "Title",
        album: 'album',
        artist: 'artist',
        Url: "believer.mp3"
    },
    {
        card_image: "/assets/card_image.png",
        title: "Title",
        album: 'album',
        artist: 'artist',
        Url: "believer.mp3"
    },
    {
        card_image: "/assets/card_image.png",
        title: "Title",
        album: 'album',
        artist: 'artist',
        Url: "believer.mp3"
    },
    {
        card_image: "/assets/card_image.png",
        title: "Title",
        album: 'album',
        artist: 'artist',
        Url: "believer.mp3"
    }
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
    if(v.hidden)
     v.hidden=false;
    else
    v .hidden= true;
}