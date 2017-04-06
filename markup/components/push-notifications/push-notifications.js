$('.jsPush').click(function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.find('.jsPushDropdown').toggleClass('_active');

  $('body, .mask').toggleClass('_active');
});

$('.mask').click(function () {
  $('.jsPush, body, .mask, .jsPushDropdown').removeClass('_active');
});