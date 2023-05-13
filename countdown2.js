// Set the date we're counting down to
var countDownDate2 = new Date("May 16, 2023 20:30:00").getTime();
        
// Update the count down every 1 second
var x2 = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("count2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdwn").innerHTML = "Σε εξέλιξη"+ ' <svg height="50" width="25" class="blinking">' +
    '<circle cx="12" cy="12" r="10" fill="red" /></svg>';;
  }
}, 1000);