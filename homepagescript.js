let headerbtn=document.querySelector('.header-upper-elements');

window.addEventListener('scroll', function(){
    headerbtn.style.top='-50px';
   
});

window.addEventListener('scrollend', function(){
    headerbtn.style.top='0';

});