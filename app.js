// grab hamburger
var ham = document.querySelector('.hamburger');


// grab the nav_mobile
var mobileMenu = document.querySelector('.nav_mobile');

// create a click event listener
//hamburger
ham.addEventListener('click', function (){
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
    }
});
window.onresize = function(){
    if(window.innerWidth > 420) {
        mobileMenu.classList.remove('active');
    }
}