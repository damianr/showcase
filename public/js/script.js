$(function(){  
  
  
  // new note field fun
  $('.note_textarea').focus(function(){ 
      $(this).parent().addClass('focused');
      $(this).css('height', '75px');
  }); 
  $('.note_textarea').blur(function(){ 
      $(this).parent().removeClass('focused');
      $(this).css('height', '40px');
  });
  

});





