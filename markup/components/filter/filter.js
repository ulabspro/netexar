$('.jsSaveFilterTrigger').click(function (e) {
  e.preventDefault();
  $(this).closest('.jsSaveFilter').find('.jsSaveFilterContent').slideToggle().find('.jsSaveFilterField').focus();
});