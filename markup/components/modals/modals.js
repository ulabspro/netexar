$('.jsModalTrigger').click(function (e) {
  e.preventDefault();

  var $this = $(this), 
      calledModal = $this.data('modal');

  $(calledModal).toggleClass('_active');
  $('.mask').toggleClass('_active');
});

$('.mask').click(function () {
  $(this).removeClass('_active');
  $('.modal').removeClass('_active');
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