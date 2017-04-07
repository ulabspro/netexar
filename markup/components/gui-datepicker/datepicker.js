// Зададим стартовую дату
var start = new Date(),
    prevDay,
    startHours = 9;

// 09:00
start.setHours(9);
start.setMinutes(0);

$('.datepicker-here').datepicker({
  minDate: new Date(),
  altField: $('.alt-datepicker'),
  altFieldDateFormat: 'dd.mm.yyyy',
  timepicker: true,
  startDate: start,
  minHours: startHours,
  maxHours: 18,
  onSelect: function(fd, d, picker) {
      // Ничего не делаем если выделение было снято
      if (!d) return;

      var day = d.getDay();

      // Обновляем состояние календаря только если была изменена дата
      if (prevDay != undefined && prevDay == day) return;
      prevDay = day;
  }
});