// document.addEventListener('DOMContentLoaded', function() {

// let btn = document.querySelector('.myBtn');
// let offer = document.querySelector('.my_offer');
// let parentBtn = document.querySelector('.parentBtn')

//     btn.addEventListener('click', function() {
//         offer.slideToggle(1000);
//         btn.innerText="Zwiń";
//         parentBtn.style.marginTop='50px';
//     })

// });

$(function(){
  
    let btn = $('.myBtn');
    let offer = $('.my_offer');
    let parentBtn = $('.parentBtn')

    
    offer.hide();
    btn.on('click', function(){

        if ( $(this).text() === 'Zobacz więcej'){
            $(this).text('Zwiń');
        } else {
            $(this).text('Zobacz więcej');
        }

        offer.slideToggle(1000);
        parentBtn.css('marginTop', '50px');
    })
    
});
    