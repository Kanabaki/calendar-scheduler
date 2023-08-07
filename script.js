

var today = dayjs(); //dayjs is called here
let currTime = parseInt(today.format("HH")); //dayjs in hr format to add functionality to the time blocks.

//when the doc is ready, perform the function below
$(document).ready(function(){
  $('#currentDay').text(today.format('dddd, MMM D, YYYY')); // Displays today in header

// Save Button Event
$(".btn").on("click",function(){
let hrId =  $(this).parent().attr("id"); //the click function targets the btn. Using the btn parent, we select the id which is the hour.
let blockTxt =  $(this).siblings(".description").val(); //the txt input blocks all have description classes and this is where we grab the value of what is written
localStorage.setItem(hrId, blockTxt); //this sets the hour as the keyName, and the blockTxt as the keyValue in localStorage
});

// Each time-block do this
$(".time-block").each(function () {
  let getBlock = $(this).attr("id"); // gets the hour id of the time-block
  $(this).children(".description").val(localStorage.getItem(getBlock) || []);

  let currBlock = parseInt(getBlock.split("-")[1]) 
// ^ ex. first block has an id of hour-9, then it is split at the "-" so it is a separated string.
// Then we select the second item in the array which would now be [hour, 9] and this saves the hour after parsing, to currBlock
  
//the code below sets the timeBlock colors
  if (currTime < currBlock) {
    $(this).addClass("past");
  } else if (currTime === currBlock) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
})
});

