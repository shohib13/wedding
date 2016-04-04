$(function(){
  $('a#priceNext').bind('click', function(){
      var priceposition = $('#prices').position();
      if(priceposition.left > -690){ 
        var meddig = -690;
        if((priceposition.left-690) >= -1380) meddig = priceposition.left-690;
        $('#prices').animate({left:(meddig)},300);
      }
  });
  
  $('a#pricePrew').bind('click', function(){
      var priceposition = $('#prices').position();
      if(priceposition.left < 0){
        var meddig = 0;
        if((priceposition.left+690) <= 0 ) meddig = priceposition.left+690;
        $('#prices').animate({left:(meddig)},300);
      }
  });
});