$('.jsModalTrigger').click(function (e) {
  e.preventDefault();

  var $this = $(this), 
      calledModal = $this.data('modal');

  $('.modal').removeClass('_active');
  $(calledModal).addClass('_active');
  $('.mask').addClass('_active');
});

$('.mask, .jsModalClose').click(function () {
  $('.mask, .modal').removeClass('_active');
});


$('.jsMapShowOverlay').click(function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.closest('.jsMapShow').toggleClass('_active').find('.jsMapShowHideLink').toggleClass('_active');
});

$('.jsMapShowHideLink').click(function () {
  var $this = $(this);

  $this.removeClass('_active');
  $this.closest('.jsMapShow').removeClass('_active').find('.jsMapShowOverlay').removeClass('_active');
});