$('.dropzone').dropzone({
  dictDefaultMessage: 'Изменить фото профиля',
  paramName: $(".js-dropzone-file").attr("name")
});