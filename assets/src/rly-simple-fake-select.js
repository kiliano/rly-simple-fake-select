$(function(){

	// Define CSS Prefix
	var rlySimplePrefix = "rly-simple";

	$("."+rlySimplePrefix+"-select").each(function(){
		var rlySimpleContent = $(this).html().replace(/<option/g,"<li><a href='javascript:void(0)'");
		var rlySimpleContent = rlySimpleContent.replace(/option>/g,"a></li>");
		var rlySimpleFirstOption = $(this).find("option:first-child").text();

		$(this).after("<span class='"+rlySimplePrefix+"-fake-select'><a href='javascript:void(0)'>"+rlySimpleFirstOption+"</a><ul class='"+rlySimplePrefix+"-fake-options'>"+rlySimpleContent+"</ul></span>");
	});


	$("."+rlySimplePrefix+"-fake-select > a").click(function(){
		$(this).next(".rly-simple-fake-options").slideToggle();
	});

	


})