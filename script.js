const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.onclick = (e) =>{
    e.stopPropagation();
    navLinks.classList.toggle('active');
}
document.body.onclick = () =>{
    navLinks.classList.remove('active');
}
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 50);
});

const numberElement_1 = document.getElementById("number_1");
let count_1 = 0;
let target_1 = 28;   

let counter_1 = setInterval(() => {
    count_1++;
    numberElement_1.textContent = count_1 + "+";
    if (count_1 === target_1) clearInterval(counter_1);
}, 60);

const numberElement = document.getElementById("number_2");
let count = 0;
let target = 150;   

let counter = setInterval(() => {
    count++;
    numberElement.textContent = count + "+";
    if (count === target) clearInterval(counter);
}, 60);