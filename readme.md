Slidify - Lightweight jQuery UI sliders
-------------------------------------------------------------------------------
Sliders are a great tool to have, because they help show a relationship between
a generic object and a generic concept really well. Unfortunately, we still don't
seem to have these controls baked into our browsers, so we've constantly gotta
roll our own custom versions.

You can generally find a good number of open source plugins to handle this,
but in my experience, they all end up being pretty bloated. If you want a fast,
responsive page, you need something that works quick.

There's where this comes in - Slidify is a jQuery plugin that, given a jQuery'd
object (input element, mind you), will turn it into a slider control. The value
of the input gets changed depending on the users interaction with the slider itself.

Slidify is fast, simple to use, and really lightweight - the minified version
is under 2kb. I've tested (and verified) Slidify in IE6/7/8, Firefox 3, 
Webkit/Chrome/etc, and Opera 9/10, and she seems to work everywhere. All styling
for Slidify is done by you in CSS - it's literally just two divs that you control.
Keep it simple and sweet, right? ;)

Usage:
-----------------------------------------------------------------------------
    <input type="text" value="0" name="lol" id="lol" class="example">
    <input type="text" value="0" name="lol2" id="lol2" class="example">
	
	$(document).ready(function() {
		$(".example").slidify({
            width: 400,
            height: 20,
			// wrapperClass/sliderClass are provided by default, no need to specify if you don't want
            wrapperClass: "slidify_slider_container",
            sliderClass: "slidify_slider_knob",
            maxValue: 500,
            callback: null 
		});
	});


Questions, comments?
-----------------------------------------------------------------------------
If you have any concerns, questions, comments, gripes, thoughts, or presents,
you can hit me up at my email (ryan [at] venodesigns [dot] net), or hit me
on them Twitters: http://twitter.com/ryanmcgrath
