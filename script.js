// fetch element 
const menuIcon = document.querySelector('#menu-icon');
const crossIcon= document.querySelector('.cross-icon');
const navbar= document.querySelector('.navbar');


menuIcon.addEventListener('click', function() {
    navbar.style = 'display:block';
    menuIcon.style= 'display:none';
    crossIcon.style= 'display:block';
});

crossIcon.addEventListener('click', function() {
    navbar.style = 'display:none';
    menuIcon.style= 'display:block';
    crossIcon.style= 'display:none';
});





