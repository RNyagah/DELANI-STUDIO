
$(document).ready(function(){
    

  $(".col-md-4").click(function(){
      $(".p.par_1").hide();
      $(".btn_1").show(); 
  });
   $(".btn_2").click(function(){
       $("p.par_2").show();   
       $(".btn_2").hide();
   });
   $(".p.pa2").click(function(){
       $("p.par_2").hide();
       $(".btn_2").show();
   });
   $(".btn_3").click(function(){
       $("p.p3").show();   
       $(".btn_3").hide();
   });
   $("p.par_3").click(function(){
       $(".btn_3").show();
       $("p.par_3").hide();
   }); 
});