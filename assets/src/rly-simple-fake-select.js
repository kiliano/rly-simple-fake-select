$(function(){

	// Define Class Prefix
	var rlySimplePrefix = "rly-simple";



	$("."+rlySimplePrefix+"-select").each(function(){
		var rlySimpleContent = $(this).html().replace(/<option/g,"<li><a href='javascript:void(0)'");
		var rlySimpleContent = rlySimpleContent.replace(/option>/g,"a></li>");
		var rlySimpleFirstOption = $(this).find("option:first-child").text();

		// Aparence

		var rlySimpleWidth = $(this).width();
		var rlySimpleHeight = $(this).height();

		$(this).after("<span class='"+rlySimplePrefix+"-fake-select'><a href='javascript:void(0)' class='"+rlySimplePrefix+"-fake-link' style='width: "+rlySimpleWidth+"px; height: "+rlySimpleHeight+"px; line-height: "+rlySimpleHeight+"px;'>"+rlySimpleFirstOption+"</a><ul class='"+rlySimplePrefix+"-fake-options'>"+rlySimpleContent+"</ul></span>");
		
	});


	// Clicking on fake
	$("."+rlySimplePrefix+"-fake-select > a").click(function(){
		$(this).next("."+rlySimplePrefix+"-fake-options").toggle();
	});

	$("."+rlySimplePrefix+"-fake-options > li > a").click(function(){
		var rlySimpleOptionSelect = $(this).text();
		var rlySimpleOptionSelectValue = $(this).attr("value");

		$(this).parents("."+rlySimplePrefix+"-fake-select").prev("select").val(rlySimpleOptionSelectValue);

		$(this).parents("."+rlySimplePrefix+"-fake-options").find("li > a").removeClass(rlySimplePrefix+"-active");
		$(this).addClass(rlySimplePrefix+"-active");
		$(this).parents("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-link").html(rlySimpleOptionSelect);
		$(this).parents("."+rlySimplePrefix+"-fake-options").hide();
	});

	// Clicking on true
	$("."+rlySimplePrefix+"-select").change(function(){
		var rlySimpleContentTrueValue = $(this).val();
		$(this).next("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-options > li > a[value='"+rlySimpleContentTrueValue+"']").click();
	});

	


})