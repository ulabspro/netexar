$('.jsCard').click(function () {
  var $this = $(this);

  $this.addClass('_active');
  $this.find('.jsCardHidden').addClass('_active');
});

$('.jsParentReviewsControlOk').click(function (e) {
  e.preventDefault();
  var $this = $(this);

  $this.closest('.jsParentReviews').addClass('_active');

  $this.closest('.jsParentReviews').next('.jsParentReviewsShowOk').addClass('_active');
});

$('.card-interest').click(function (e) {
  e.preventDefault();
  if ($(this).hasClass('_active')) {
    $(this).removeClass('_active').html('Сохранить в интересные');
  } else {
    $(this).addClass('_active').html('Убрать из интересных');
  }
});