/* Smooth Scroll Navigation */

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior: "smooth"
});

}

});

});

/* Scroll Animation */

const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){

card.classList.add("show");

}

});

});

/* Counter Animation */

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.innerText.replace("+","");

const current = +counter.innerText;

const increment = target / 200;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter,10);

}

};

updateCounter();

});

/* Navbar background change on scroll */

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 100){

navbar.style.background = "#021024";

}else{

navbar.style.background = "#041126";

}

});

/* Simple Dark Mode Toggle */

const darkToggle = document.getElementById("darkToggle");

if(darkToggle){

darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

}
