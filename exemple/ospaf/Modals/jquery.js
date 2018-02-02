$("button").click(function(){
	if($(this).attr("data-type")=="open-modal") {
		var modalTarget =  $(this).attr("data-target");
		$("#"+modalTarget).css("display", "block");
		$("body").css("overflow", "hidden");
		setTimeout(function(){
			$("#"+modalTarget).css("opacity", "1");
			$("#"+modalTarget).children("div").css("top", "20%");
		},100);
	}
});
$("body").click(function(targetDiv){
	if($(targetDiv.target).attr("data-type") == "parent-modal"){
		$(targetDiv.target).css("opacity", "0");
		$("body").css("overflow", "visible");
		$(targetDiv.target).children("div").css("top", "100%");
		setTimeout(function(){
			$(targetDiv.target).css("display", "none");
		},1100);
	}
});