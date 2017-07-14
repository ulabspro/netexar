$('.jsChangeCostTrigger').click(function (e) {
  e.preventDefault();
  $(this).closest('.jsChangeCost').find('.jsChangeCostArea').removeAttr('disabled').addClass('_active').focus();
  $(this).hide();
  $('.jsChangeCostTriggerOff').attr('data-cost', $(this).closest('.jsChangeCost').find('.jsChangeCostArea').val()).show();
  $('.save-cost').show();
});

$('.jsChangeCostTriggerOff').click(function (e) {
  e.preventDefault();
  $(this).closest('.jsChangeCost').find('.jsChangeCostArea').removeClass('_active').attr('disabled', 'disabled').val($(this).data('cost'));
  $(this).hide();
  $('.jsChangeCostTrigger').show();
  $('.save-cost').hide();
});



var areaSize = function() {
  var textSize = $('.jsChangeCostArea').val().length;
  $('.jsChangeCostArea').attr('size', textSize);
}

if ($('*').is('.jsChangeCostArea')) {
  areaSize();
}
