$(function() {
                
    var $mainNav = $('.main-nav');
    var $window = $(window);
    var $sections = [];
    
    $mainNav.find('a').each(function() {
         $sections.push($($(this).attr('href')));
    })
    
    

    var testHeader = function() {
        if ($window.scrollTop() > 100) {
            $mainNav.addClass("small");
        } else {
            $mainNav.removeClass("small");
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

    testHeader();

})