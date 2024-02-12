var op = document.getElementById("openPage");
var tp = document.getElementById("tyPage");
var submitButton = document.getElementById("submit");
var signupButton = document.getElementById("signup");
var smb = document.getElementById("submited");
submitButton.addEventListener("click", function() {
	event.preventDefault();
    //alert("Hello! I am an alert box!!");   
	op.style.display = "none";
	tp.style.display = "block";
	
	
  });
smb.addEventListener("click", function() {
	event.preventDefault();
    //alert("Hello! I am an alert box!!");   
	window.location.href = "index.html";
	
	
  });





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




