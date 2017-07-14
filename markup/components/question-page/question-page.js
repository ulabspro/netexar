$('.jsToggleSlide').click(function () {
  $(this).find('.jsToggleSlideTrigger').toggleClass('_active');
  $(this).find('.jsToggleSlideContent').slideToggle();
});