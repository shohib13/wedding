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
function Shohib_euis() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=Shohib_euis.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
Shohib_euis('image/01.gif','image/03.gif','image/direction.gif','image/bio-photo.png','image/bioscope.png','image/btn-zoom.png','image/btn-back.png','image/contac-me.jpg','image/dinner-animation.gif','image/event-16april.jpg','image/events.gif','image/foreground.png','image/jegtomb.png','image/logo-main.png','image/logo-sub.png','image/map.gif','image/mountain.png','image/our-story.gif','image/page-resepsi.png','image/page-forum.png','image/page-main.png','image/page-gallery.png','image/panel-1.png','image/scroll-gallery.png','image/sky.jpg','image/story-content.png','image/submenu.png','image/gallery-img-bg.png','image/gallery-kategoriahatter.png','image/venue.png','image/shohib-euis.png','image/woods.png','image/resepsi.gif','js/jquery-1.4.4.js','js/jquery-ui.min.js','js/jquery.colorbox.js','js/jquery.maskedinput.js','js/site.js','js/jquery.uniform.js','js/loader.js','js/gallery.js','js/lovestory.js','js/resepsi.js')