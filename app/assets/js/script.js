 var scrollOffset=-30;

(function($) {
  "use strict";


  $(window).bind("load", function() {
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(1000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(1000).css({'overflow-x': 'hidden'}).css({'overflow-y': 'auto'});
    checkContactForm();
     $('body').scrollspy({ target: '.nav-menu' });

   
$('body').data()['bs.scrollspy'].options.offset = Math.abs(scrollOffset)+10; // Set the new offset 
$('body').data()['bs.scrollspy'].process(); // Force scrollspy to recalculate the offsets to your targets 
$('body').scrollspy('refresh'); // Refresh the scrollspy.


  });


  $(window).ready(function() {

    var wow = new WOW(
            {
              boxClass: 'wow', // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset: '-200px', // distance to the element when triggering the animation (default is 0)
              mobile: true, // trigger animations on mobile devices (default is true)
              live: true        // act on asynchronously loaded content (default is true)
            }
    );

    new WOW().init();

    $('.skill').circliful({
      fgcolor: "#E64A3B",
      fontsize: "20",
      bgcolor: "#D8CDBB",
      dimension: "150"

    });


    $('.has-shadow').append('<div class="shadow"></div>');

    function getImgSize(el, imgSrc) {
      var newImg = new Image();
      newImg.onload = function() {
        var height = newImg.height;
        var width = newImg.width;

        el.css('height', height);

      };
      newImg.src = imgSrc;
    }

    if ($('.bg-image[data-bg-image]').length > 0) {
      $('.bg-image[data-bg-image]').each(function() {
        var el = $(this);
        var sz = getImgSize(el, el.attr("data-bg-image"));
        el.css('background-position', 'center').css('background-image', "url('" + el.attr("data-bg-image") + "')").css('background-size', 'cover').css('background-repeat', 'no-repeat');
      });
    }

    if ($('.bg-color[data-bg-color]').length > 0) {
      $('.bg-color[data-bg-color]').each(function() {
        var el = $(this);
        el.css('background-color', el.attr("data-bg-color"));
      });
    }

    if ($('.portfolio-item').length > 0) {
      var $container = $('#portfolio-grid');
      $container.isotope({filter: '*'});
      $('.group-selectors a').click(function(e) {
        e.preventDefault();
        var selector = $(this).attr('data-filter');
        $container.isotope({filter: selector, columnWidth: 4});
        $('.group-selectors a.active').removeClass('active');
        $(this).toggleClass('active');
        return false;
      });
      $('.group-selectors a').each(function() {
        $(this).append('<span></span>');
      });


    }



    $('[data-placeholder]').focus(function() {
      var input = $(this);
      if (input.val() == input.attr('data-placeholder')) {
        input.val('');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('data-placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('data-placeholder'));
      }
    }).blur();

    $('[data-placeholder]').parents('form').submit(function() {
      $(this).find('[data-placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('data-placeholder')) {
          input.val('');
        }
      });
    });
    
    
    
  });


  $('.goto-top').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 2000);
  });

  if ($('a[data-rel="prettyphoto"]').length > 0) {
    $('a[data-rel="prettyphoto"]').prettyPhoto();
  }
  if ($('a[data-rel="prettyPhoto"]').length > 0) {
    $('a[data-rel="prettyPhoto"]').prettyPhoto();
  }


  //Contact form setup
  function checkContactForm() {
    if ($(".contact-form").length > 0) {
      var formStatus = $(".contact-form").validate();
      //   ===================================================== 
      //sending contact form
      $(".contact-form").submit(function(e) {
        e.preventDefault();

        //  triggers contact form validation
        if (formStatus.errorList.length === 0)
        {
          $(".contact-form .submit").fadeOut(function() {
            $('#loading').css('visibility', 'visible');
            $.post('submit.php', $(".contact-form").serialize(),
                    function(data) {
                      $(".contact-form input,.contact-form textarea").not('.submit').val('');
                      $('.message-box').html(data);
                      $('#loading').css('visibility', 'hidden');
                      $(".contact-form").css('display', 'none');
                      //$(".contact-form .submit").removeClass('disabled').css('display', 'block');
                    }
            );
          });
        }
      });
    }
  }
 
  


//hashtag navigation address setup (deeplink)
  $('.nav-menu a').address($(this).attr('href'));
  $('.top-drop-menu').change(function() {
    var loc = ($(this).find('option:selected').val());
    $('.nav-menu a').address(loc);

  });


  $.address.change(function(event) {
    var pageID = event.value.split('/')[1];
    if (pageID != '' && pageID.indexOf('.') === -1) {
      var el = $(".nav-menu [href=#" + pageID + "]");
      $('.nav-menu .active').removeClass('active');
      el.parent().addClass('active');
      $('select.nav option').each(function() {
        var val = $(this).val();
        if (val === "#" + pageID) {
          $('select.nav option:selected').removeAttr('selected');
          $(this).attr('selected', 'selected');
        }
      });
      scrollToSection("#" + pageID);
    } else {
      if (pageID.indexOf('.') > -1) {
        window.location = pageID;
      }
    }
  });

  $('select.nav').change(function() {
    var loc = ($(this).find('option:selected').val());
    scrollToSection(loc);
  });

  function scrollToSection(destSection) {

    $('html, body').stop().animate({
      scrollTop: $(destSection).offset().top + scrollOffset
    }, 2000, 'easeInOutExpo');
  }

  $('.nav-menu a').bind('click', function(event) {
    event.preventDefault();
    var clickedMenu = $(this);
    $('.nav-menu .active').toggleClass('active');
    clickedMenu.parent().toggleClass('active');
    scrollToSection(clickedMenu.attr('href'));
  });

})(jQuery);



// Sticky Nav
$(window).scroll(function(e) {
  var nav_anchor = $(".top-menu-holder");
  var gotop = $(document);
  if ($(this).scrollTop() >= 500) {
    $('.goto-top').css({'opacity': 1});
  } else if ($(this).scrollTop() < 500)
  {
    $('.goto-top').css({'opacity': 0});
  }
  if ($(this).scrollTop() >= $('header').height())
  {
    nav_anchor.addClass('split');
  }
  else if ($(this).scrollTop() < $('header').height())
  {
    nav_anchor.removeClass('split');
  }
});




/**
 Provides requestAnimationFrame in a cross browser way.
 @author paulirish / http://paulirish.com/ */
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function() {
    return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(/* function FrameRequestCallback / callback, / DOMElement Element */ element) {};
  })();

}