/*	Slidify v1.0
 *	
 *	@Author: Ryan McGrath (ryan [at] venodesigns dot net) (@ryanmcgrath on Twitter)
 *	@Requires: jQuery 1.3.2 or greater (may work with older versions, but not guaranteed)
 */

(function($) {
	$.fn.slidify_timeoutCallback = null;
    
    $.fn.slidify_updatePosition = function(e, sliderElement, sliderContainer, originalElement, maxValue, callbackfn) {
		var sliderKnob = $(sliderElement);
	
		var sliderWidth = sliderKnob[0].offsetWidth,
			containerWidth = sliderContainer.offsetWidth,
			sliderContainerLeftOffset = sliderContainer.offsetLeft;
	
		var newLeft = ((e.pageX - sliderContainerLeftOffset) + (sliderWidth / 2) > containerWidth ? containerWidth - sliderWidth : (e.pageX - sliderContainerLeftOffset) - (sliderWidth / 2));
		
		sliderKnob.css({"left": (newLeft < 0 ? 0 : newLeft)});

        // Update original value of junk
        if($.fn.slidify_timeoutCallback) clearTimeout($.fn.slidify_timeoutCallback);
        
        $.fn.slidify_timeoutCallback = setTimeout(function() { 
            originalElement[0].value = (sliderKnob[0].offsetLeft / containerWidth) * maxValue;
            if(typeof callbackfn === "function") callbackfn(originalElement[0].value);
        }, 200);
    };
	
	$.fn.slidify = function(paramsObj) {
		return this.each(function() {			
			var sliderContainer = document.createElement("div"),
				sliderElement = document.createElement("div"),
                originalElement = $(this);
		    
            var defaults = {
                width: $(this)[0].offsetWidth,
                height: $(this)[0].offsetHeight,
                wrapperClass: "slidify_slider_container",
                sliderClass: "slidify_slider_knob",
                maxValue: 500,
                callback: null
            };

            $.extend(defaults, paramsObj);
	
			// Set up our container...
			sliderContainer.style.position = "relative";
			sliderContainer.className = defaults.wrapperClass;
			sliderContainer.style.width = defaults.width + "px";
			sliderContainer.style.height = defaults.height + "px";
			
			// Set up our slider knob...
			sliderElement.style.position = "absolute";
			sliderElement.className = defaults.sliderClass;
		
			$(this)[0].style.display = "none";
		
			sliderContainer.appendChild(sliderElement);
			$(this).after(sliderContainer);

			$(sliderContainer).mousedown(function(e) {
                // Fairly ugly DOM level 2 hack, but IE sucks - throw it anyway
				if(document.onselectstart) document.onselectstart = function() { return false; };

                $(this).slidify_updatePosition(e, sliderElement, sliderContainer, originalElement, defaults.maxValue, defaults.callback);
				
                $(document.body).mousemove(function(e) {
					$(this).slidify_updatePosition(e, sliderElement, sliderContainer, originalElement, defaults.maxValue, defaults.callback);
				});

                $(document.body).mouseup(function() {
                    if(document.onselectstart) document.onselectstart = null;
                    $(this).unbind('mousemove');
                });
			});
		});
    }
})(jQuery);
