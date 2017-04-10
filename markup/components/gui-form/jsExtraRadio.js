$('.jsChangeAccItem').click(function (e) {
  var accItemPos = $(this).index();

  if (accItemPos == 0) {
    $('.jsChangeAccItemToggle').hide();
  } else {
    $('.jsChangeAccItemToggle').show();
  }
})