const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

link.addEventListener("click", function(){

navLinks.forEach(item=>item.classList.remove("active"));

this.classList.add("active");

});

});

const btn = document.querySelector(".btn");

btn.addEventListener("click", function(e){

e.preventDefault();

alert("Silakan masukkan file CV Anda terlebih dahulu.");

});