let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountainsBehind = document.getElementById('mountains_behind');
let title = document.getElementById('title');
let cta = document.getElementById('cta');
let mountainsFront = document.getElementById('mountains_front');
let header = document.querySelector('header');

document.addEventListener('scroll', () => {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 0.8 + "px";
    mountainsBehind.style.top = value * 0.5 + "px";
    mountainsFront.style.top = value * 0 + "px";
    title.style.marginRight = value * 4 + "px";
    title.style.marginTop = value * 1.5 + "px";
    cta.style.marginTop = value * 1.5 + "px";
    header.style.top = value + "px";
});