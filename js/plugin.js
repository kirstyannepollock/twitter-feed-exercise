(function ( $ ) {
 
    $.fn.twitterFeed = function( options ) {
 
        // Default options.
        var settings = $.extend({
            // These are the defaults.
            url: "https://twitter.com/talktalk",
            class:"twitter-timeline", 
			data_height:"500" ,
			data_width:"600",
			linkText: "TalkTalk"
        }, options );
 
        // Construct the widget
		//e.g.
		// <a class="twitter-timeline" data-height="500" data-width="600" href="https://twitter.com/talktalk">Tweets </a>
		// <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		// <div class="clearfix"></div>
		
		// link
		var link = $("<a />",{
			"data-height": settings.data_height,
			"data-width": settings.data_width,
			href: settings.url
		})
		.text(settings.linkText)
		.addClass(settings.class);
		
		//script
		var script = $("<script />", {
			src: "https://platform.twitter.com/widgets.js",
			charset:"utf-8",
			async: "async"
		});
		
		//clearfix, just in case
		var div = $("<div />").addClass("clearfix");
		
		// pass back out
        return this.append(link)
		.append(script)
		.append(div);
 
    };
 
}( jQuery ));