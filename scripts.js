let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/* typing text animation */
const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Data Analyst', 'AI/ML Developer', 'Speaker', 'Writer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

/* skills button toggle*/
document.getElementById('technologiesBtn').addEventListener('click', function() {
    document.getElementById('technologies').classList.add('show');
    document.getElementById('languages').classList.remove('show');
    this.classList.add('active');
    document.getElementById('languagesBtn').classList.remove('active');
});

document.getElementById('languagesBtn').addEventListener('click', function() {
    document.getElementById('languages').classList.add('show');
    document.getElementById('technologies').classList.remove('show');
    this.classList.add('active');
    document.getElementById('technologiesBtn').classList.remove('active');
});
