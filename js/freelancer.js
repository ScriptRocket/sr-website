(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  })


  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();

    } else {
      $('.scroll-to-top').fadeOut();

    }

  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  var toggleLogo = function () {
    var browserWidth = window.innerWidth;
    if (browserWidth < 992) {
      $("#logo-shrink").removeClass('hidden');
      $("#logo-expand").addClass('hidden');
    }
    else {
      $("#logo-shrink").addClass('hidden');
      $("#logo-expand").removeClass('hidden');
    }
  };
  // Collapse Navbar
  var navbarCollapse = function () {
    var scrollDistance = $(this).scrollTop();
    var browserHeight = window.innerHeight
    if ($("#mainNav").offset().top > browserHeight - 80) {
      $("#mainNav").addClass("navbar-shrink");
      $("#black-logo").removeClass("hidden");
      $("#white-logo").addClass("hidden");

    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#black-logo").addClass("hidden");
      $("#white-logo").removeClass("hidden");

    }
  };
  toggleLogo();
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(window).resize(toggleLogo);

  $(document).on('click', '.portfolio-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
