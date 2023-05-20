const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const press = document.querySelector(".btn");

btnPopup.addEventListener("click", ()=> {
	wrapper.classList.add("wow");
}); 		

press.addEventListener("click", ()=> {
	wrapper.classList.remove("wow");
});

press.addEventListener("click", ()=> {
	btnPopup.classList.add("logged");
});

function stuff(){
	alert("Successfully logged in!");	
}
