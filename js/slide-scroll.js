$(function() {
    
var $mainNav = $('.main-nav');
var $window = $(window);
var $sections = [];

$mainNav.find('a').each(function() {
$sections.push($($(this).attr('href')));
})

var autoAddClassOnScroll = function () {
//automatyczne dodawanie klasy przy scrollowaniu
//jak nie potrzeba to usun ponizsze linie
let active = -1;
$.each($sections, function(i) {          
if ($sections[i].offset().top <= $window.scrollTop() + $window.height()/5) {                                
    active = i;
}            
})
if (active >= 0) {
$mainNav.find('li').removeClass('active');
$mainNav.find('li').eq(active).addClass('active');
}
}    

$mainNav.find('a').on('click', function(e) {
e.preventDefault();
var href = $(this).attr('href');
var $target = $(href);

$(this).parent().siblings().removeClass('active');
$(this).parent().addClass('active');

$('html, body').animate({
scrollTop : $target.offset().top
}, 1000)
});
$window.on('scroll', function() {
autoAddClassOnScroll();
});

autoAddClassOnScroll();

})