console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let compliment = document.querySelector("#compliment")
function pictureMouseOver(evt) {
	evt.preventDefault();
    
    alert(`${compliment}`);
}

let picture1 = document.querySelector("img")
picture1.addEventListener("mouseover", pictureMouseOver)