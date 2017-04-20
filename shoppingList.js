
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
    $('#clear').click(function() {
        $(shoppingList).empty()
});


var seconds = 0
var minutes = 0
var hours = 0

/*  var timer = function() {

      if (seconds <= 59)
        seconds +=1

      if (seconds == 60) {
        minutes += 1
        seconds = 0
      }
      if (minutes == 60) {
        hours += 1
        minutes = 0
      }
      var time = hours + ":" + minutes + ":" + seconds
      console.log(time)
      $("#header").text(time)

  }
  var myVar = setInterval(timer, 1000);
  timer() */

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
