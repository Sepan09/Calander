// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// var saveBtn = $('.btn');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
$ ('.btn').on('click', function () {
  var textBox = $(this).siblings('.description').val();
  var currentHour = $(this).parent().attr('id');
  localStorage.setItem(currentHour, textBox)
})
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var timeBlockElms = $('.time-block')

  timeBlockElms.each(function() {
    var currentHour = $(this).parent().attr('id');
    console.log(dayjs(currentHour).hour());
    var fromTime = dayjs().hour();
    var toTime = dayjs(currentHour).hour()
    if (toTime === fromTime) {
      console.log('true');
    } else if (toTime != fromTime) {
      console.log('false');
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

function displayTime () {
  var currentTime = dayjs().format('MMM D, YYYY, hh:mm:ss a');
  $('#currentDay').text(currentTime);
}

$("#9 .description").val(localStorage.getItem('9'));
$("#10 .description").val(localStorage.getItem('10'));
$("#11 .description").val(localStorage.getItem('11'));
$("#12 .description").val(localStorage.getItem('12'));
$("#13 .description").val(localStorage.getItem('13'));
$("#14 .description").val(localStorage.getItem('14'));
$("#15 .description").val(localStorage.getItem('15'));
$("#16 .description").val(localStorage.getItem('16'));
$("#17 .description").val(localStorage.getItem('17'));
$("#18 .description").val(localStorage.getItem('18'));
$("#19 .description").val(localStorage.getItem('19'));
$("#20 .description").val(localStorage.getItem('20'));



displayTime();
setInterval(displayTime,1000);
