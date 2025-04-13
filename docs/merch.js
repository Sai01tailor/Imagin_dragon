let merch_item = [
    {   id:1,
        image: "assets/items.png",
        title: "VEGAS EXCLUSIVE TOUR T-SHIRT (Size S)",
        Mrp: "20USD",
        link: "item.html",
        type:"tops"
    },
    {   id:2,
        image: "assets/items.png",
        title: "VEGAS EXCLUSIVE TOUR T-SHIRT (Size M)",
        Mrp: "20USD",
        link: "item.html",
        type:"tops"
    },
    {   id:3,
        image: "assets/items.png",
        title: "VEGAS EXCLUSIVE TOUR T-SHIRT (Size L)",
        Mrp: "20USD",
        link: "item.html",
        type:"tops"
    },
    {   id:4,
        image: "assets/items.png",
        title: "VEGAS EXCLUSIVE TOUR T-SHIRT (Size XL)",
        Mrp: "20USD",
        link: "item.html",
        type:"tops"
    },
    {   id:5,
        image: "assets/items.png",
        title: "VEGAS EXCLUSIVE TOUR T-SHIRT (Size XXL)",
        Mrp: "20USD",
        link: "item.html",
        type:"tops"
    }
];
document.addEventListener('contextmenu', event => event.preventDefault());
let total = 0;
let cart = [];
for (let item of merch_item) {
    document.querySelector(".store-items").innerHTML += 
        `<div class="item-card">
            <div class="images"><img src="${item.image}" alt="${item.title}" ></div>
            <div class="text">
                <h3 class="titled" >${item.title}</h3>
                <h4 class="price">${item.Mrp}</h4>
                <button class="add-to-cart" onclick='carting(${item.id})'>add to cart</button>
            </div>
        </div>`;
}
function carting(a){
    cart.push(a);
    document.querySelector(".nos-cart").innerHTML = cart.length;
}
function decarting(a) {
    const index = cart.indexOf(a);
    
    if (index !== -1) {
        cart.splice(index, 1); 
    }

    document.querySelector(".nos-cart").innerHTML = cart.length;
    checkout();
}

function getTitleById(id) {
    let item = merch_item.find(i => i.id === id);
    return item ? item.title : false;
}
function getitemById(id) {
    let item = merch_item.find(i => i.id === id);
    return item 
}
document.querySelector(".nos-cart").innerHTML = cart.length;

function show_more(){
    document.querySelector(".show-more").innerHTML = "loading";
    let  timeout = setTimeout(refreshed_show,5000);
}
function refreshed_show(){
    document.querySelector(".show-more").innerHTML = "Show more"
    alert("That is all we have right now")
}

function checkout(){
    document.querySelector(".checkout").style  = "display:block !important;";
    document.querySelector(".checkout-item").innerHTML = "";
    for (let id of cart) {
        item = getitemById(id)
        document.querySelector(".checkout-item").innerHTML += 
        `<div class="item-card" style="width:97%;height:20vh;">
        <div class="text" >
        <h2 class="titled">${item.title}</h2>
        <h4 class="price">${item.Mrp}</h4>
        </div>
        <h2 onclick="decarting(${item.id})" style="color: white;cursor: pointer;user-select:none;">X</h2>
        </div>`;}
        
    }
function closeX(){
    document.querySelector(".checkout").style  = "display:none !important;";
    
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