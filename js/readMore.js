document.addEventListener('DOMContentLoaded', function() {

let btn = document.querySelector('.myBtn');
let offer = document.querySelector('.my_offer');
let parentBtn = document.querySelector('.parentBtn')

    btn.addEventListener('click', function() {
        offer.style.display="block";
        btn.innerText="Zwiń";
        parentBtn.style.marginTop='50px';
    })

});