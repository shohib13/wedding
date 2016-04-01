$(function(){

  /*SZALLASOK*/
  $('.katBtn1 a').click(function(){
      $('#szallasKategoria').hide("scale", {}, 500);
      $('#szallas').show("scale", {}, 500);
  });
  
  $('.katBtn3 a').click(function(){
      $('#szallas').show("scale", {}, 500);
      $('#szallas').hide("scale", {}, 500);
  });
  $('#szallasKatBack').click(function(){
      $('#szallasKategoria').show("scale", {}, 500);
      $('#szallas').hide("scale", {}, 500);
  });
  $('a.szallasReszlet').click(function(){
      $('#szallasKategoria').show("scale", {}, 500);
      $('#szallas').hide("scale", {}, 500);
  });
  $('#szallasListBack').click(function(){
      $('#szallasKategoria').show("scale", {}, 500);
      $('#szallas').hide("scale", {}, 500);
  });
  
  /*szallas scroll*/
  $("a.szallasScrollDn").bind("click", function(){
    var ContHeight = $("#szallasFrame").height();
    var FrameHeight = $("#szallasLeiras").height()
    if(FrameHeight > ContHeight){
      var Frameposition = $("#szallasLeiras").position();
      if(FrameHeight+Frameposition.top > ContHeight){
      $("#szallasLeiras").animate({top:(Frameposition.top-100)},300);
      }
    }
  });
  $("a.szallasScrollUp").bind("click", function(){
    var Frameposition = $("#szallasLeiras").position();    
    if(Frameposition.top < 0){
      if(Frameposition.top > -100){$("#szallasLeiras").animate({top:(0)},300);}
      else $("#szallasLeiras").animate({top:(Frameposition.top+100)},300);
    }
  });

});