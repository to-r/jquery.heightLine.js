;(function($){
	$.fn.heightLine = function(){
		var target = this;
		var heightLineObj = {
			op : {
				"maxWidth" : 10000,
				"minWidth" : 0,
				"fontSizeCheck" : false
			},
			setOption : function(op){
				this.op = $.extend(this.op,op);
			},
			destroy : function(){
				target.css("height","");
			},
			create : function(op){
				var self = this,
					maxHeight = 0,
					windowWidth = $(window).width();
				self.setOption(op);
				if( windowWidth<=self.op.maxWidth && windowWidth>=self.op.minWidth ){
					target.each(function(){
						if($(this).outerHeight()>maxHeight){
							maxHeight = $(this).outerHeight();
						}
					}).each(function(){
						var height = maxHeight
								   - parseInt($(this).css("padding-top"))
								   - parseInt($(this).css("padding-bottom"));
						$(this).height(height);
					});
				}
			},
			refresh : function(op){
				this.destroy();
				this.create(op);
			}
		}

		$(window).on("resize",function(){
			heightLineObj["refresh"]();
		});

		if(typeof arguments[0] === "string"){
			heightLineObj[arguments[0]](arguments[1]);
		}else{
			heightLineObj["create"](arguments[0]);
		}

		if(heightLineObj.op.fontSizeCheck){
			
			if($("#fontSizeChange").length<=0){
				var fontSizeChange = $("<span id='fontSizeChange'></span>").css({
					width:0,
					height:"1em",
					position:"absolute",
					left:0,
					top:0
				}).appendTo("body");
			}
			var defaultFontSize = $("#fontSizeChange").height();
			setInterval(function(){
				if(defaultFontSize != $("#fontSizeChange").height()){
					heightLineObj["refresh"]();
				}
			},100);
		}
		return target;
	}
})(jQuery);