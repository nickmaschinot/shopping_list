
var $textInput = $('input:text');
var $newItem = $('#newItem')
console.log(8)


$(document).ready(function() {
    var $newItem = $('#newItem');
    var $textInput = $('input:text');
    //var id = $(this).attr('id');
    console.log(8);

    $newItem.on('submit', function(e) {
      e.preventDefault();
      var newText = $textInput.val();
      $(shoppingList).append('<li class="complete"> ' + newText + '</li>');

    //  $('li').click(function() {
      //    $(this).toggleClass('faded');
//});
      $('li').dblclick(function() {
          $(this).remove();
});
      $("#newItem")[0].reset()


});
  //  $('li').click(function() {
  //      $(this).toggleClass('faded');
//});
    $('li').dblclick(function() {
        $(this).remove();
});

$('#shoppingList').on('click', 'li', function () {
    $(this).toggleClass('faded');
});
    $('#clear').dblclick(function() {
        $(shoppingList).empty()
});
});




/* var el = document.getElementById("shoppingList");
el.addEventListener('click', function(e) {
  itemDone(e);
}, false);

$(document).ready(function() {
   $("#shoppingList").click(function() {
     $(this).itemDone();
 });
 });

 function getTarget(e) {
   return e.target;
 }

 function itemDone(e) {
   var target, elParent, elGrandparent;
   target = getTarget(e);
   elParent = target.parentNode;
   elGrandparent = target.parentNode.parentNode;
   elGrandparent.removeChild(elParent);

   if (e.preventDefault) {
     e.preventDefault();
   }
 }

var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</i>'); */
