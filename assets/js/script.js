// The code is wrapped in a jQuery document ready function, ensuring that it runs when the DOM is fully loaded.
$(function () {

  // Getting the current date and hour using the Day.js library.
  var currentDate = dayjs()
  var currentHour = dayjs().hour()

  // Selecting the element with the ID "currentDay" to display the current date.
  var currentDayEl = $("#currentDay")

  currentDayEl.text(currentDate.format("dddd, MMM DD"))

  // Looping through hours (9 to 17) to set classes for past, present, and future time slots.
  for (var i = 9; i < 18; i++) {
    var parentId = $("#hour-" + i)
    var textarea = parentId.children('textarea')
    if (i === currentHour) {
      textarea.addClass("present") // Adding a class for the present hour.
    }
    else if (i < currentHour) {
      textarea.addClass("past") // Adding a class for past hours.
    } else {
      (i > currentHour)
      textarea.addClass("future") // Adding a class for future hours.
    }
    // Retrieving stored values from localStorage and setting the textarea values accordingly.
    var value = localStorage.getItem("hour-" + i)
    textarea.val(value)
  }
  // Selecting elements with the class "saveBtn" to handle click events.
  var saveBtnEl = $(".saveBtn");
  var saveBtnEl = $(".saveBtn")

  // Function to handle saving events when the save button is clicked.
  function saveEvent(event) {
    var textareaEl
    var parentId

    // Checking if the clicked element is an "i" element (icon) or a "button" element.
    if ($(event.target).attr("class") === "fas fa-save") { //i element
      var iEl = $(event.target) // event target is current selector
      textareaEl = iEl.parent().siblings('textarea')
      console.log(iEl, "current button")
      console.log(textareaEl, "sibling of button")
      parentId = $(event.target).parent().parent().attr("id")
    }
    else {
      //button
      var buttonEl = $(event.target) // event target is current selector
      textareaEl = buttonEl.siblings('textarea')
      console.log(buttonEl, "current button")
      console.log(textareaEl, "sibling of button")
      parentId = $(event.target).parent().attr("id")
    }

    // Storing the textarea value in localStorage with the corresponding ID.
    localStorage.setItem(parentId, textareaEl.val())
  }

  // Attaching the saveEvent function to the click event of elements with the class "saveBtn".
  saveBtnEl.on("click", saveEvent)

});


