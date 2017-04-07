$('.jsExtraCheckCheckbox').change(function() {
  if($(this).is(":checked")) {
    $(this).closest('.jsExtraCheck').find('.jsExtraCheckField').show().focus();
  } else {
    $(this).closest('.jsExtraCheck').find('.jsExtraCheckField').hide().val('');
  }
});