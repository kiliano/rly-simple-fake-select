$(function(){

	// Define CSS Prefix
	var rlySimplePrefix = "rly-simple-";

	$("."+rlySimplePrefix+"select").each(function(){
		var rlySimpleContent = $(this).html().replace(/option/g,"li");
		var rlySimpleFirstOption = $(this).find("option:first-child").text();

		$(this).after("<a href='javascript:void(0)' class='"+rlySimplePrefix+"fake-select'>"+rlySimpleFirstOption+"</a><ul class='"+rlySimplePrefix+"fake-options'>"+rlySimpleContent+"</ul>");


	});

	


})