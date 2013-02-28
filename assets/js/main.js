$(document).ready(function() {
  $(window).scroll(function(){
    
    if ($(window).scrollTop() > 15) {
       $('.bar').animate({ height: '100px', opacity:0.9 }, 50, function() {
        $('#logo a').css("background-position","0 -71px");
        });
    } else  {
      $('.bar').animate({ height: '7px' }, 50, function() { 
        $('#logo a').css("background-position","0 0");
      });
    }

  });

  $.scrollUp({ 
    topDistance: '200',
    topSpeed: 300
  });
  
});