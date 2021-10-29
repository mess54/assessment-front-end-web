function myFavoriteColor(evt) {
    evt.preventDefault();
    
    alert(`My favorite color is mint blue!`);
}
let myFavoriteColorBtn = document.querySelector("#color")

myFavoriteColorBtn.addEventListener("click", myFavoriteColor)

function myFavoritePlace(evt) {
    evt.preventDefault();
    
    alert(`My favorite place is sitting at my computer desk with my animals laying next to me!`);
}
let myFavoritePlaceBtn = document.querySelector("#place")

myFavoritePlaceBtn.addEventListener("click", myFavoritePlace)

function myFavoriteRitual(evt) {
    evt.preventDefault();
    
    alert(`My favorite ritual is my night-time routine getting both of my animals comfy and then going to sleep`);
}
let myFavoriteRitualBtn = document.querySelector("#ritual")

myFavoriteRitualBtn.addEventListener("click", myFavoriteRitual)