(function() {
  'use strict';

  const header = function() {
    $('.header-fixed').css('padding-top', $('.bf-nav').height());
  };

  // for smooth animation nav scrolling
  const navigation = function() {
    $('body').on(
      'click',
      '#bf-offcanvas ul a:not([class="external"]), .main-nav a:not([class="external"])',
      function(event) {
        var section = $(this).data('nav-section');
        if ($('[data-section="' + section + '"]').length) {
          $('html, body').animate(
            {
              scrollTop: $('[data-section="' + section + '"]').offset().top - 30
            },
            500,
            'easeInOutExpo'
          );
        }

        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-bf-nav-toggle').removeClass('active');
        }
        event.preventDefault();
        return false;
      }
    );
  };

  // Reflect scrolling in navigation
  const navActive = function(section) {
    var $el = $('.main-nav > ul');
    $el.find('li').removeClass('active');
    $el.each(function() {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest('li')
        .addClass('active');
    });
  };

  // Loading page
  const loaderPage = function() {
    $('.bf-loader').fadeOut('slow');
  };

  const $win = $(window);
  // for pageload
  if ($win.scrollTop() > 0) {
    $('.bf-nav').addClass('active');
  } else {
    $('.bf-nav').removeClass('active');
  }

  // for scrolling
  $win.scroll(function() {
    if ($win.scrollTop() > 0) {
      $('.bf-nav').addClass('active');
    } else {
      $('.bf-nav').removeClass('active');
    }
  });

  $(function() {
    header();
    navigation();
    loaderPage();
  });
})();
