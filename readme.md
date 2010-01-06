This project is now deprecated.
-------------------------------------------------------------------------------
Hey-o,

Thanks to everyone who showed support for Slidify in the short time it was alive.
As the author, I've hit a point where my time is fairly limited, due to other
projects (Twython, Luno, work, etc). There's simply no way that I can maintain this
on top of every other project I work on.

That said, since it's open source, I'm leaving the repository up. Feel free to use
it as a guide for building jQuery plugins or something - alternatively, if you'd
like to fork and take over the project, be my guest.

Anybody looking for kickass UI Slider controls should hit up jQuery UI, YUI, or Dojo.
The amount of logic that goes into building this seemingly simple control can actually
be staggering, and they've got some of the brightest minds in the Javascript community
hammering on the issues. Trust them.

~ Ryan McGrath




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
