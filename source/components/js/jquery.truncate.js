(function($) {
	$.fn.truncate = function(options) {
		
		var defaults = {
			length: 150,
			minTrail: 60,
			ellipsisText: "..."
		};

		var options = $.extend(defaults, options);
		
		return this.each(function() {
			obj = $(this);
			
			var body = obj.html();

			if(body.length > options.length + options.minTrail) {
				var splitLocation = body.indexOf(' ', options.length);

				if(splitLocation != -1) {
					var splitLocation = body.indexOf(' ', options.length);
					var str1 = body.substring(0, splitLocation);
				    var str2 = body.substring(splitLocation, body.length - 1);
				    obj.html(str1 + '<span class="truncate_ellipsis">' + options.ellipsisText + 
				      '</span>');
				}
			}
		});
	};
})(jQuery);