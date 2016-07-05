var $ = jQuery.noConflict();

$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();
});
  jQuery('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#ffffff',
          color: '#006491',
          hoverOpacity: 0.7,
          selectedColor: '#28ABE3',
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#C8EEFF', '#006491'],
          normalizeFunction: 'polynomial',
          onRegionClick: function(event){
            $('#popup-box-1').show();
            $('#blackout').show();
          }
        });

        $('.close').click(function() {
        $('.popup-box').hide();
        $('#blackout').hide();
        });
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    
    $('.navbar-toggle:visible').click();
});
// Progress Bar
$(document).ready(function ($) {
    "use strict";
    // skills animation
    $('#skill-section').waypoint({
        handler: function(event, direction) {
            $(this).find('.singel-hr-inner').each(function(){
                var height = $(this).data('height');
                $(this).css('height', height);
            });
        },
        offset: '60%'
    });        
        
});


$ ( function () {
	$(".video").fitVids();
	
});
/* ------------------------------------------------------*/
// Start Sidenav Section 
/* ------------------------------------------------------ */

(function () {
    
    "use strict";
	var bodyEl = document.body,
		content = document.querySelector('.content-wrap'),
		openbtn = document.getElementById('open-button'),
		closebtn = document.getElementById('close-button'),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener('click', toggleMenu);
		if (closebtn) {
			closebtn.addEventListener('click', toggleMenu);
		}
	}

	function toggleMenu() {
		if (isOpen) {
			classie.remove(bodyEl, 'show-menu');
		}
		    else {
                classie.add(bodyEl, 'show-menu');
		    }

		isOpen = !isOpen;
	}

	init();

})();


