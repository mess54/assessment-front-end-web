console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted!");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let picture1 = document.querySelector("Pops and I.jpeg")
let compliment = document.querySelector(".compliment")
function complimentUser(evt) {
	evt.preventDefault();
	MouseEvent(compliment);
}
compliment.addEventListener("mouseover", complimentUser)