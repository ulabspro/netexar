$('.jsSaveFilterTrigger').click(function (e) {
  e.preventDefault();
  $(this).closest('.jsSaveFilter').find('.jsSaveFilterContent').slideToggle().find('.jsSaveFilterField').focus();
});

$('.jsDateBtn').click(function (e) {
  e.preventDefault();
  var dateSel = $(this).data('date');
  $(this).addClass('_active').siblings().removeClass('_active');
  $(this).closest('.jsDate').find('.jsDateValue').val(dateSel);
});