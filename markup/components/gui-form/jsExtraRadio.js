$('.jsChangeAccItem').click(function (e) {
  var accItemPos = $("input", this).val();
  if (accItemPos == 2) {
    $('.jsChangeAccItemToggle').hide();
  } else {
    $('.jsChangeAccItemToggle').show();
  }
})