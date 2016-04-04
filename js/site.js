function loadHotelList(what,where){        
    $.get(
        what,
        {},
        function(data){
            $('#'+where).html(data);
        },
        'text'
    );
}
function loadHotel(what2,where2){
        $('#gallery').show("scale", {}, 500);
        $('#galleryLista').hide("scale", {}, 500);
        $.get(
            what2,
            {},
            function(data){
                $('#'+where2).html(data);
                $("#galleryLeiras").animate({top:(0)},300);
            },
            'text'
        );
    }

function NavRead(){
    $('a.pl').click(function(e){
        e.preventDefault();
        var pageToLoad = $(this).attr('rel');
        $('#foreground').each(function(i){ $(this).animate({left: (-6000 * (pageToLoad-1-i)) + "px"}, 1500);});
        $('.page').each(function(i){
          if(pageToLoad-1 == i && pageToLoad != 5){
            var pag = $(this).attr('id');
            $('#'+pag).load('data/'+pag+'.html');
          }
          $(this).animate({left: (-2000 * (pageToLoad-1-i)) + "px"}, 1500);
        });
        $('#woods').each(function(i){ $(this).animate({left: (-200 * (pageToLoad-1-i)) + "px"}, 1500);});
        $('#mountain').each(function(i){ $(this).animate({left: (100 * (pageToLoad-1-i)) + "px"}, 1500);});
        $('#sky').each(function(i){ $(this).animate({left: (-50 * (pageToLoad-1-i)) + "px"}, 1500);});
        if(pageToLoad !=5){
            $("#menu").animate({bottom: 520 + "px"}, 1500);
            $("#mainLogo").animate({bottom: -500 + "px"}, 2000);
        } else {
            $("#menu").animate({bottom: 2000 + "px"}, 1500);
            $("#mainLogo").animate({bottom: 300 + "px"}, 2000);
        }
    });
}
    
    
    
/*EFFECTS*/
$(document).ready(function(){
    $('.page').each(function(i){
        $(this).css('left', i*2000-8000 + "px");
    });
    NavRead();
    $(document).snowfall({ minSize: 10, maxSize:20});
    
});




/*  Snowfall jquery plugin */
(function($){
	$.snowfall = function(element, options){
		var	defaults = {
				flakeCount : 35,
				flakeColor : '#ffffff',
				flakeIndex: 999999,
				minSize : 1,
				maxSize : 3,
				minSpeed : 2,
				maxSpeed : 5,
				round : false,
				shadow : false
			},
			options = $.extend(defaults, options),
			random = function random(min, max){
				return Math.round(min + Math.random()*(max-min)); 
			};
			
			$(element).data("snowfall", this);			
			
			// Snow flake object
			function Flake(_x, _y, _size, _speed, _id)
			{
				// Flake properties
				this.id = _id; 
				this.x  = _x;
				this.y  = _y;
				this.size = _size;
				this.speed = _speed;
				this.step = 0,
				this.stepSize = random(10,10) / 100;
				
				var flakeMarkup = $(document.createElement("div")).attr({'class': 'snowfall-flakes', 'id' : 'flake-' + this.id}).css({'width' : '20px', 'height' : '20px', 'background' : 'url(image/snow.png)', 'position' : 'absolute', 'top' : this.y, 'left' : this.x, 'fontSize' : 0, 'zIndex' : options.flakeIndex});
				
				if($(element).get(0).tagName === $(document).get(0).tagName){
					$('#mountain').append(flakeMarkup);
					element = $('#mountain');
				}else{
					$(element).append(flakeMarkup);
				}
				
				this.element = document.getElementById('flake-' + this.id);
				
				// Update function, used to update the snow flakes, and checks current snowflake against bounds
				this.update = function(){
					this.y += this.speed;
					
					if(this.y > (elHeight) - (this.size  + 6)){
						this.reset();
					}
					
					this.element.style.top = this.y + 'px';
					this.element.style.left = this.x + 'px';
					
					this.step += this.stepSize;
					this.x += Math.cos(this.step);
					
					if(this.x > (elWidth) - widthOffset || this.x < widthOffset){
						this.reset();
					}
				}
				
				// Resets the snowflake once it reaches one of the bounds set
				this.reset = function(){
					this.y = 0;
					this.x = random(widthOffset, elWidth - widthOffset);
					this.stepSize = random(1,10) / 100;
					this.size = random((options.minSize * 100), (options.maxSize * 100)) / 100;
					this.speed = random(options.minSpeed, options.maxSpeed);
				}
			}
		
			// Private vars
			var flakes = [],
				flakeId = 0,
				i = 0,
				elHeight = $(element).height(),
				elWidth = $(element).width(),
				widthOffset = 0,
				snowTimeout = 0;
			
			// This will reduce the horizontal scroll bar from displaying, when the effect is applied to the whole page
			if($(element).get(0).tagName === $(document).get(0).tagName){
				widthOffset = 25;
			}
			
			// Bind the window resize event so we can get the innerHeight again
			$(window).bind("resize", function(){  
				elHeight = $(element).height();
				elWidth = $(element).width();
			}); 
			

			// initialize the flakes
			for(i = 0; i < options.flakeCount; i+=1){
				flakeId = flakes.length;
				flakes.push(new Flake(random(widthOffset,elWidth - widthOffset), random(0, elHeight), random((options.minSize * 100), (options.maxSize * 100)) / 100, random(options.minSpeed, options.maxSpeed), flakeId));
			}
			// this controls flow of the updating snow
			function snow(){
				for( i = 0; i < flakes.length; i += 1){
					flakes[i].update();
				}
				
				snowTimeout = setTimeout(function(){snow()}, 30);
			}
			
			snow();
		
		// Public Methods
		
		// clears the snowflakes
		this.clear = function(){
						$(element).children('.snowfall-flakes').remove();
						flakes = [];
						clearTimeout(snowTimeout);
					};
	};
	
	// Initialize the options and the plugin
	$.fn.snowfall = function(options){
		if(typeof(options) == "object" || options == undefined){		
				 return this.each(function(i){
					(new $.snowfall(this, options)); 
				});	
		}else if (typeof(options) == "string") {
			return this.each(function(i){
				var snow = $(this).data('snowfall');
				if(snow){
					snow.clear();
				}
			});
		}
	};
})(jQuery);