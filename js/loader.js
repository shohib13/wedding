$(window).load(function () {
    $('#preloader').fadeOut(500, function () {
        $('#div_name').css('visibility', 'visible');
		$(this).remove()
    })
});

function loadPage()
{
 window.location.href = "index.html";
}
function loadBody()
{
	setInterval("loadPage()", 1000000)
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
MM_preloadImages('image/01.gif','image/03.gif','image/arrow-animation.gif','image/direction.gif','image/bio-photo.png','image/bioscope.png','image/btn-arak.png','image/btn-hozzaszolok.png','image/btn-mehet.png','image/btn-vissza.png','image/contac-me.jpg','image/dinner-animation.gif','image/directions.jpg','image/event-22February.jpg','image/event-24February.jpg','image/event-photo.png','image/events.gif','image/event-video.png','image/foreground.png','image/jegtomb.png','image/logo-main.png','image/logo-sub.png','image/map.gif','image/mountain.png','image/our-story.gif','image/page-arak.png','image/page-forum.png','image/page-main.png','image/page-szallas.png','image/page-zenekarok.gif','image/panel-1.png','image/reach-us.jpg','image/scroll-szallas.png','image/sky.jpg','image/story-content.png','image/story-content1.png','image/submenu.png','image/szallas-img-bg.png','image/szallas-kategoriahatter.png','image/szallas-visszabtn.png','image/venue.jpg','image/vijay-rosleen.png','image/woods.png','image/zenekarok.png','js/jquery-1.4.4.js','js/jquery-ui.min.js','js/jquery.colorbox.js','js/jquery.maskedinput.js','js/site.js','js/jquery.uniform.js','js/loader.js','js/szallasok.js','js/arak.js','js/forum.js','js/zenekarok.js','image/tumnail-photo.jpg','image/tumnail-video.jpg' )