(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
 
            var defaults = {
                top: 100,
                overlay: 0.5,
                closeButton: null
            }
            
            var overlay = $("<div id='lean_overlay'></div>");
            
            $("body").append(overlay);
                 
            options =  $.extend(defaults, options);
 
            return this.each(function() {
            
                var o = options;
               
                $(this).click(function(e) {
              
              	var modal_id = $(this).attr("href");

				$("#lean_overlay").click(function() { 
                     close_modal(modal_id);                    
                });
                
                $(o.closeButton).click(function() { 
                     close_modal(modal_id);                    
                });
                         	
              	var modal_height = $(modal_id).outerHeight();
        	  	var modal_width = $(modal_id).outerWidth();

        		$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

        		$('#lean_overlay').fadeTo(200,o.overlay);
        		
        		var left = '50%';
        		var marginLeft = -(modal_width/2) + "px";
        		

        		$(modal_id).css({ 
        			'display' : 'block',
        			'position' : 'fixed',
        			'opacity' : 0,
        			'z-index': 11000,
        			'left': left,
        			'right': left, // rtl
        			'margin-left': marginLeft,
        			'margin-right': marginRight, // rtl
        			'top' : o.top + "px"
        		
        		});

        		$(modal_id).fadeTo(200,1);

                e.preventDefault();
                		
              	});
             
            });

			function close_modal(modal_id){

        		$("#lean_overlay").fadeOut(200);

        		$(modal_id).css({ 'display' : 'none' });
			
			}
    
        }
    });
     
})(jQuery);
