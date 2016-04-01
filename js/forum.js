$(function(){
    /*FORUM*/
    /* be van e jelentkezve */
    var url = 'forum.php';
    $.post(url, {
                  ellenoriz: 'ellen'
                },
      function(data) {
        if(data == 'siker'){
          $('#forumLogin').hide("clip", {}, 500);
          $('#forumFrame').load('data/forumframe.html?'+Math.random()*Math.random());
        }
      }
    );
    /* bejelentkezÃ©s elkÃ¼ldÃ©se */
    $('.loginToForum').click(function(){
        $.post(url, {
                      username: $('#username').val(),
                      password: $('#password').val()
                    },
          function(data) {
            if(data == 'siker'){
              $('#forumLogin').hide("clip", {}, 500);
              $('#forumFrame').load('data/forumframe.html?'+Math.random()*Math.random());
            }
          }
        );
    });
    
    
    /* komment panel be */
    $('.forumCommentBtn').click(function(){
        $('#comment').val('');
        $('#forumComment').show("scale", {}, 500);
    });
    
	     /* hozzÃ¡szÃ³lÃ¡s kÃ¼ldÃ©se */
    $('.sendComment').click(function(){
        if($('#comment').val().length >1 ) {
          $.post(url, {
                        comment: $('#comment').val()
                      },
            function(data) {
                $('#forumFrame').load('data/forumframe.html?'+Math.random()*Math.random());
              }
          )    
        }
        $('#comment').val('');
        $('#forumComment').hide("clip", {}, 500);
    });
    /* komment mÃ©gsem */
    $('.backToComments').click(function(){
        $('#forumComment').hide("clip", {}, 500);
    });

    /*forum scroll*/
      $("a.forumScrollDn").bind("click", function(){
        var ContHeight = $("#forumFrameCont").height();
        var FrameHeight = $("#forumFrame").height()
        if(FrameHeight > ContHeight){
          var Frameposition = $("#forumFrame").position();
          if(FrameHeight+Frameposition.top > ContHeight){
          $("#forumFrame").animate({top:(Frameposition.top-200)},300);
          }
        }
      });
      $("a.forumScrollUp").bind("click", function(){
        var Frameposition = $("#forumFrame").position();    
        if(Frameposition.top < 0){
          if(Frameposition.top > -200){$("#forumFrame").animate({top:(0)},300);}
          else $("#forumFrame").animate({top:(Frameposition.top+200)},300);
        }
      });
});      