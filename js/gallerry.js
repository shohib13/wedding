$(function(){

  /*gallery*/
  $('.katBtn1 a').click(function(){
      $('#galleryKategori').hide("scale", {}, 500);
      $('#gallery').show("scale", {}, 500);
  });
  
  $('.katBtn3 a').click(function(){
      $('#gallery').show("scale", {}, 500);
      $('#gallery').hide("scale", {}, 500);
  });
  $('#galleryKatBack').click(function(){
      $('#galleryKategori').show("scale", {}, 500);
      $('#gallery').hide("scale", {}, 500);
  });
  $('a.galleryReszlet').click(function(){
      $('#galleryKategori').show("scale", {}, 500);
      $('#gallery').hide("scale", {}, 500);
  });
  $('#galleryListBack').click(function(){
      $('#galleryKategori').show("scale", {}, 500);
      $('#gallery').hide("scale", {}, 500);
  });
  
  /*gallery scroll*/
  $("a.galleryScrollDn").bind("click", function(){
    var ContHeight = $("#galleryFrame").height();
    var FrameHeight = $("#gallerySource").height()
    if(FrameHeight > ContHeight){
      var Frameposition = $("#gallerySource").position();
      if(FrameHeight+Frameposition.top > ContHeight){
      $("#gallerySource").animate({top:(Frameposition.top-100)},300);
      }
    }
  });
  $("a.galleryScrollUp").bind("click", function(){
    var Frameposition = $("#gallerySource").position();    
    if(Frameposition.top < 0){
      if(Frameposition.top > -100){$("#gallerySource").animate({top:(0)},300);}
      else $("#galleryLeiras").animate({top:(Frameposition.top+100)},300);
    }
  });

});