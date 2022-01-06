

$(document).ready(function(){
    
  $(".btn_1").click(function(){ 
      $("p.par_1").show();
      $(".btn_1").hide(); 
  });
  $("p.par_1").click(function(){
      $("p.par_1").hide();
      $(".btn_1").show(); 
  });
   $(".btn_2").click(function(){
       $("p.par_2").show();   
       $(".btn_2").hide();
   });
   $("p.par_2").click(function(){
       $("p.par_2").hide();
       $(".btn_2").show();
   });
   $(".btn_3").click(function(){
       $("p.par_3").show();   
       $(".btn_3").hide();
   });
   $("p.par_3").click(function(){
       $(".btn_3").show();
       $("p.par_3").hide();
   }); 
});


$(document).ready(function(){
  $("form").submit(function(){
      event.preventDefault();
          var name = $('#inputName').val;
          var email = $('#inputEmail').val;
          var message = $('#inputMessage').val
        if (!name.value || !email.value || !message.value){
            alert('Please check your entries');
        } else{
            event.preventDefault();
            $(this).get(0).reset();
            alert("successful submission");
        }
    
     
  });
  $(".col-sm-3 .box").hide(500);
  $(".col-sm-3").hover(function(){
      $(this).children(".col-sm-3 .box").toggle(500);
  });

});



