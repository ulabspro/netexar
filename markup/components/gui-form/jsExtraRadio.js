$('.jsChangeAccItem').click(function (e) {
  var accItemPos = $("input", this).val();
  console.log(accItemPos);
  if (accItemPos == 3) {
    $('.jsChangeAccItemToggle').hide();
  } else {
    $('.jsChangeAccItemToggle').show();
  }
})