// ymaps.ready(init);
// var myMap;

// function init(){     
//     myMap = new ymaps.Map("map", {
//         center: [55.76, 37.64],
//         zoom: 7
//     });
// }

$('.jsKladr').kladr({
  token: '594bb67a0a69dedd1d8b4588',
  oneString: true,
  type: 'city',
  parentType: $.kladr.type.city,
  parentId: '7700000000000',
  spinner: false
});