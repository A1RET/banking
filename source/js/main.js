(function($) {
  var carousel = $(".services__list");

  // Запускаем плагин карусели
  carousel.owlCarousel({
    loop: true,
    margin: 30,
    responsive:{
      0: {
        items: 1
      },

      768: {
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
