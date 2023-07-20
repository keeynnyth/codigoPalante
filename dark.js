let toggle = document.getElementById('container');

let body = document.querySelector('body');
let head = document.querySelector('head')

toggle.onclick= function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
}