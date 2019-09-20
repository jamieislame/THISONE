$(document).ready(function () {

	//* intro jquery file
  
  $('ul li').hover(function(){
        $("#picture").removeClass().addClass(
          $(this).attr('rel'));
        $(this).addClass('active').siblings()
        .removeClass('active');

       });




   });