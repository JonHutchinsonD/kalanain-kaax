$(document).ready(function () {
	AOS.init();
});

let scroll = document.documentElement.scrollTop
// let originalLogo = document.querySelector('#navLogo').getAttribute('src')
window.addEventListener('scroll', () => {
    // let navbar_home = document.querySelector('.navbar.navbar-home #navLogo')
    // let navbar_interior = document.querySelector('.navbar.navbar-interior #navLogo')
    scroll = document.documentElement.scrollTop
    
    if (scroll >= 400) {
        document.querySelector('.navbar').classList.remove('static')
        document.querySelector('.navbar').classList.add('scroll')

        // if (document.body.contains(navbar_home)) navbar_home.setAttribute('src', '/images/nuup_nomads-logo-positive.svg')
        // if (document.body.contains(navbar_interior)) navbar_interior.setAttribute('src', '/images/nuup_nomads-logo-positive.svg')
    } else {
        document.querySelector('.navbar').classList.add('static')
        document.querySelector('.navbar').classList.remove('scroll')

        // if (document.body.contains(navbar_home)) navbar_home.setAttribute('src', originalLogo)
        // if (document.body.contains(navbar_interior)) navbar_interior.setAttribute('src', originalLogo)
    }
});