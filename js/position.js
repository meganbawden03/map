$(function() {
  var $window = $(window);
  var $slideAd = $('#popup-window');
  var endZone = $('#footer').offset().top - $window.height() - 100;

  $window.on('scroll', function() {

    if (endZone < $window.scrollTop()) {
		if(cls==false)
		{
		//popupWindow.fadeIn(500);
	     popupWindow.style.display = "block";
		 // popupWindow.style.opacity +=1;
		 
		}
      //$slideAd.animate({ 'right': '0px' }, 250);
    } else {
     // $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});