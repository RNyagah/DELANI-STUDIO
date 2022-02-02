
$(document).ready(function(){
    

  $(".des-img").click(function(){
      $(".p.par_1").hide();
      $(".btn_1").show(); 
  });
   $(".dev-img").click(function(){
       $("p.par_2").show();   
       $(".btn_2").hide();
   });
   $(".prod-img").click(function(){
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