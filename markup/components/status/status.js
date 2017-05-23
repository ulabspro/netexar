$('.status').click(function () {
  if ($(this).hasClass('_active')) {
    $(this).removeClass('_active').html('Статус: Свободен');
  } else {
    $(this).addClass('_active').html('Статус: Занят');
  }
});