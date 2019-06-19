(function($) {
  var toggleMenu = $(".header__menu-btn");
  var menu = $(".header__nav");
  var account = $(".header__btn-wrapper");

  toggleMenu.click(function(evt) {
    evt.preventDefault;
    toggleMenu.toggleClass("header__menu-btn--opened");
    menu.toggleClass('header__nav--opened');
    account.toggleClass("header__btn-wrapper--shown");
  });

  var carousel = $(".services__list");

  carousel.owlCarousel({
    loop: true,
    margin: 30,
    responsive:{
      0: {
        items: 1
      },

      769: {
        items: 2,
        center: true
      },

      1025: {
        items: 3
      },

      1351: {
        items: 4
      }
    }
  });

  $(".services__btn--prev").click(function () {
    carousel.trigger("prev.owl");
    return false;
  });

  $(".services__btn--next").click(function () {
    carousel.trigger("next.owl");
    return false;
  });

})(jQuery);
