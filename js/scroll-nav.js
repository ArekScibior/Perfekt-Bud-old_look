	//------------------------------------------------------
	//podczas scrollu dodaje headerowi klase hover
	//------------------------------------------------------

	document.addEventListener('DOMContentLoaded', function() {

        let testNav = function() {
            var top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
            if (top > 256) {
                nav.classList.add('nav-scroll');
            } else {
                nav.classList.remove('nav-scroll');
            }
        };

		let nav = document.querySelector('.main-nav');
		testNav();
		window.addEventListener('scroll', function() {
			testNav();
		})
	});
