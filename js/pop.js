
  // Get the elements by their ID
	var popupLink = document.getElementById("popup-link");
	var popupWindow = document.getElementById("popup-window");
	var thank = document.getElementById("ty");
	var shr = document.getElementById("share");
	var closeButton = document.getElementById("close-button");
	var submitButton = document.getElementById("submit-button");
	var signupButton = document.getElementById("signup");
	var count = 0;
	var cls = false;
	var cost = 50;             // Unit of table
	var i = 1;                 // Set counter to 1
	var msg = '';              // Message
	var isclicked = false;
	
	j = [0,0,12, 120];
	sub = ['one month','three months','one year' ];
	month = [1,3,12];
	  while (i < 4) {
		  
		msg += 'Subscribe for ' + sub[i-1]+ ' for $' + ((month[i-1]*cost)- j[i]);
		
		
		if(j[i]==0){
			msg+='.<br />';
			}
		
		if(i>=2)
		{
		msg+=' and only spend $'+(cost-(j[i]/month[i-1]))+' a month!<br />';	
		msg+='(save $'+(j[i]/month[i-1])+' a month)'+'<br />';
		
		}
		
		i++;
	  }

	// Write the message into the page
	var el = document.getElementById('blackboard');
	el.innerHTML = msg;
	


  // Show the pop-up window when the link is clicked
  popupLink.addEventListener("click", function(event) {
    event.preventDefault();
	
    popupWindow.style.display = "block";
  });
     // Show the pop-up window when the link is clicked

  
  // Hide the pop-up window when the close button is clicked
  closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
	 cls=true;
  });
  
  //submit email
  submitButton.addEventListener("click", function() {
    thank.style.display = "none";
	shr.style.display = "block";
	
  });
 
  //num=30;
  /* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function myf() {

  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a hotel object using object literal syntax
  var hotel = {
    name: 'limited time only',
    roomRate: num, // Amount in dollars
    discount: 15,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
	
  };
	
  // Write out the hotel name, standard rate, and the special rate
  var hotelName, roomRate, specialRate;                    // Declare variables
	
	
  hotelName = document.getElementById('hotelName');        // Get elements
  roomRate = document.getElementById('roomRate');
  
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name;                      // Write hotel name
  roomRate.textContent =  '$' + hotel.roomRate.toFixed(2); // Write room rate
  
  specialRate.textContent = '$' + hotel.offerPrice();      // Write offer price


  // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
  var expiryMsg; // Message displayed to users
  var today;     // Today's date
  var elEnds;    // The element that shows the message about the offer ending
 
  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date();                             // Put today's date in variable
  elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today);         // Add the expiry message
  

// Finish the immediately invoked function expression
}());


function checkLength(e, minLength) {         // Declare function
  var el, elMsg;                             // Declare variables
  if (!e) {                                  // If event object doesn't exist
    e = window.event;                        // Use IE fallback
  }
  el = e.target || e.srcElement;             // Get target of event
  elMsg = el.nextSibling;                    // Get its next sibling

  if (el.value.length < minLength) {         // If length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                   // Otherwise
    elMsg.innerHTML = '';                    // Clear message
  }
}

var elUsername = document.getElementById('username');// Get username input

if (elUsername.addEventListener) {           // If event listener supported
  elUsername.addEventListener('blur', function(e) {  // On blur event
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  }, false);                                       // Capture in bubble phase
} else {                                           // Otherwise
  elUsername.attachEvent('onblur', function(e) {   // IE fallback onblur
    // NOTE: This function is checkLength() - not checkUsername()
    checkLength(e, 5);                             // Call checkLength()
  });
}
	var el = document.getElementById('wm');
	el.innerHTML = elUsername;



