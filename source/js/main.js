(function($) {
  var carousel = $(".services__list");

  // Запускаем плагин карусели
  carousel.owlCarousel({
    items:4,
    loop:true,
    margin: 30
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
