$(function () {
    let btn = $('.myBtn');
    let offer = $('.my_offer');
    let parentBtn = $('.parentBtn')
    offer.hide();
    btn.on('click', function () {
        if ($(this).text() === 'Zobacz więcej') {
            $(this).text('Zwiń');
        } else {
            $(this).text('Zobacz więcej');
        }
        offer.slideToggle(1000);
        parentBtn.css('marginTop', '50px');
    })
});