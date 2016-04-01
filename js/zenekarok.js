$(document).ready(function(){

  /*ZENEKAROK*/
  $('.z1').click(function(){$('.z1Panel').show("scale", {}, 500);});
  $('.z2').click(function(){$('.z2Panel').show("scale", {}, 500);});
  $('.z3').click(function(){$('.z3Panel').show("scale", {}, 500);});
  $('.z4').click(function(){$('.z4Panel').show("scale", {}, 500);});
  $('.z5').click(function(){$('.z5Panel').show("scale", {}, 500);});
  $('.z6').click(function(){$('.z6Panel').show("scale", {}, 500);});
  $('.z7').click(function(){$('.z7Panel').show("scale", {}, 500);});
  $('.z8').click(function(){$('.z8Panel').show("scale", {}, 500);});
  $('div.z1Panel>a.panelBack').click(function(){$('.z1Panel').hide("clip", {}, 300);});
  $('div.z2Panel>a.panelBack').click(function(){$('.z2Panel').hide("clip", {}, 300);});
  $('div.z3Panel>a.panelBack').click(function(){$('.z3Panel').hide("clip", {}, 300);});
  $('div.z4Panel>a.panelBack').click(function(){$('.z4Panel').hide("clip", {}, 300);});
  $('div.z5Panel>a.panelBack').click(function(){$('.z5Panel').hide("clip", {}, 300);});
  $('div.z6Panel>a.panelBack').click(function(){$('.z6Panel').hide("clip", {}, 300);});
  $('div.z7Panel>a.panelBack').click(function(){$('.z7Panel').hide("clip", {}, 300);});
  $('div.z8Panel>a.panelBack').click(function(){$('.z8Panel').hide("clip", {}, 300);});
  
  $("a.[rel='k1']").colorbox();
  $("a.[rel='v1']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k2']").colorbox();
  $("a.[rel='v2']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k3']").colorbox();
  $("a.[rel='v3']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k4']").colorbox();
  $("a.[rel='v4']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k5']").colorbox();
  $("a.[rel='v5']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k6']").colorbox();
  $("a.[rel='v6']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k7']").colorbox();
  $("a.[rel='v7']").colorbox({width:"630px", height:"450px", iframe:true});
  $("a.[rel='k8']").colorbox();
  $("a.[rel='v8']").colorbox({width:"630px", height:"450px", iframe:true});  

});