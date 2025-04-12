const v = document.getElementById("cards")
document.addEventListener('contextmenu', event => event.preventDefault());
function animated_card_slide(){
   v.style.setProperty('--pseudo_content','7vw 0px')
   v.style.setProperty('--rot_slide',"5deg" )
   v.style.setProperty('--pseudo_content1','-7vw 0px')
   v.style.setProperty('--rot_slide1',"-5deg" )
}
function animated_card_slide_off(){
    v.style.setProperty('--pseudo_content','5px -4px')
    v.style.setProperty('--rot_slide',"-5deg" )
    v.style.setProperty('--pseudo_content1','-5px -4px')
    v.style.setProperty('--rot_slide1',"5deg" )
}
let ele = document.querySelector(".left");

function cumulativeOffset(element) {
    let top = 0;
    while (element) {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    }
    return top;
}

let backgroundRemoved = false;

function back_change() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    const elementTop = cumulativeOffset(ele);

    if (scrollPosition > elementTop && !backgroundRemoved) {
        document.body.classList.add("fade-bg");
        backgroundRemoved = true;
    } else if (scrollPosition <= elementTop && backgroundRemoved) {
        document.body.classList.remove("fade-bg");
        backgroundRemoved = false;
    }
}

document.addEventListener("scroll", back_change);

function disc(){
    let v =document.querySelector(".disc-1sthalf");
    v.firstElementChild.style.setProperty('--translf',"-20vw")
    v.firstElementChild.nextElementSibling.style.setProperty('--translf2',"-40vw")
    let v1 =document.querySelector(".disc-2ndhalf");
    v1.firstElementChild.style.setProperty('--transls',"20vw")
    v1.firstElementChild.nextElementSibling.style.setProperty('--transls2',"40vw")
    
}
function disc_off(){
    let v =document.querySelector(".disc-1sthalf");
    v.firstElementChild.style.setProperty('--translf',"0px")
    v.firstElementChild.nextElementSibling.style.setProperty('--translf2',"0px")
    let v1 =document.querySelector(".disc-2ndhalf");
    v1.firstElementChild.style.setProperty('--transls',"0px")
    v1.firstElementChild.nextElementSibling.style.setProperty('--transls2',"0px")
}
let currentAudio = null;

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
        document.querySelector(".nav-bar-head").style.setProperty("--translunhide","49.25vh");}
        else{
        v .hidden= true;
        document.querySelector(".nav-bar-head").style.setProperty("--translunhide","90vh");}
}