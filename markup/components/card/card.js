$('.jsCard').click(function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.find('.jsCardHidden').toggleClass('_active');
});

$('.jsParentReviewsControlOk').click(function (e) {
  e.preventDefault();
  var $this = $(this);

  $this.closest('.jsParentReviews').addClass('_active');

  $this.closest('.jsParentReviews').next('.jsParentReviewsShowOk').addClass('_active');
});