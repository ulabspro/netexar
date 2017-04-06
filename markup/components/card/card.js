$('.jsCard').click(function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.find('.jsCardHidden').toggleClass('_active');
});