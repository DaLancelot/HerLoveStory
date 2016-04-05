/*$('#chapter, #footer').blurjs({
        source: 'body',
        radius: 30,
        overlay: 'rgba(232, 0, 130, .05)'
});*/
var f = 0;
/*$('div#next-slide').on('click', function () {
  if (f == 0) {
    addT();
    giveExp();
  } else {
    addNL();
  };
  return f = 1;
});*/

/*$('body').on('click', function () {
  $('#modal, #overlay').fadeToggle(600).toggle(display);
});*/

function giveExp () {
  $('div#level-bar > span#progress').animate({width : '30%'}, 1000);
  $('div#level-bar > span#progress').attr('class', '30');
};

function addT() {
  var textToAdd = '<div id="dlg-sect"><h2>Onodera</h2><p>Oh, really? I would love that!</p></div>';
  $('#dlg-container').prepend(textToAdd);
  $('#dlg-sect:last-child').remove();
};
var i = 0;
function addNL() {
  var textToAdd = '<div id="dlg-sect"><h2>Onodera</h2><p>Oh, really? I would love that!</p></div>';
  if (i == 0) {
    $('#dlg-sect:first-child > p').text("But I don't know if my parents will let me..");
  } else {
    $('#dlg-sect:first-child > p').text("I'll ask anyway :)");
    $('div#next-slide').fadeOut(600);
  };
  return i = 1;
};
