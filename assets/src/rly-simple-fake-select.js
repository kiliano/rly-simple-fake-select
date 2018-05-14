// Auto Use

// Define Class Prefix

var rlySimplePrefix = "rly-simple";
$(function(){




	$("."+rlySimplePrefix+"-select").each(function(){
		var rlySimpleContent = $(this).html().replace(/<option/g,"<li><a href='javascript:void(0)'");
		var rlySimpleContent = rlySimpleContent.replace(/option>/g,"a></li>");

		// Selected Option
		var rlySimpleSelectedOption = $(this).val();
		var rlySimpleSelectedOptionTxt = $(this).find("option[value='"+rlySimpleSelectedOption+"']").text();

		if (rlySimpleSelectedOptionTxt == "" || rlySimpleSelectedOptionTxt == null) {
			var rlySimpleSelectedOptionTxt = $(this).val();
		}

		// Size
		var rlySimpleWidth = $(this).css("width");
		var rlySimpleHeight = $(this).css("height");

		// Take true select class
		var rlySimpleClass = $(this).attr("class").replace(rlySimplePrefix+'-select',"");

		// Building Fake Select
		$(this).after("<span class='"+rlySimplePrefix+"-fake-select'><a href='javascript:void(0)' class='"+rlySimplePrefix+"-fake-link "+rlySimpleClass+"' style='width: "+rlySimpleWidth+"; height: "+rlySimpleHeight+";'>"+rlySimpleSelectedOptionTxt+"</a><ul class='"+rlySimplePrefix+"-fake-options'>"+rlySimpleContent+"</ul></span>");
		
	});


	// Clicking on fake
	$("."+rlySimplePrefix+"-fake-select > a").click(function(){
		$(this).next("."+rlySimplePrefix+"-fake-options").toggle();
	});

	$("."+rlySimplePrefix+"-fake-options > li > a").click(function(){
		var rlySimpleOptionSelect = $(this).text();
		var rlySimpleOptionSelectValue = $(this).attr("value");

		if (rlySimpleOptionSelectValue == "" || rlySimpleOptionSelectValue == null ) {
			var rlySimpleOptionSelectValue = $.trim(rlySimpleOptionSelect);
		}
		
		$(this).parents("."+rlySimplePrefix+"-fake-select").prev("select").trigger("change").val(rlySimpleOptionSelectValue);

		$(this).parents("."+rlySimplePrefix+"-fake-options").find("li > a").removeClass(rlySimplePrefix+"-active");
		$(this).addClass(rlySimplePrefix+"-active");
		$(this).parents("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-link").html(rlySimpleOptionSelect);
		$(this).parents("."+rlySimplePrefix+"-fake-options").hide();
	});

	// Clicking on true
	$("."+rlySimplePrefix+"-select").change(function(){
		var rlySimpleContentTrueValue = $(this).val();

		var rlySimpleContent = $(this).next("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-options > li > a[value='"+rlySimpleContentTrueValue+"']").text();
		$(this).next("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-link").text(rlySimpleContent);
	});

	


})

// Funcion

function RlySimpleFakeSelect(e) {

	$(e).each(function(){
		$(this).addClass(rlySimplePrefix+'-select');
		var rlySimpleContent = $(this).html().replace(/<option/g,"<li><a href='javascript:void(0)'");
		var rlySimpleContent = rlySimpleContent.replace(/option>/g,"a></li>");

		// Selected Option
		var rlySimpleSelectedOption = $(this).val();
		var rlySimpleSelectedOptionTxt = $(this).find("option[value='"+rlySimpleSelectedOption+"']").text();

		if (rlySimpleSelectedOptionTxt == "" || rlySimpleSelectedOptionTxt == null) {
			var rlySimpleSelectedOptionTxt = $(this).val();
		}

		// Size
		var rlySimpleWidth = $(this).css("width");
		var rlySimpleHeight = $(this).css("height");

		// Take true select class
		var rlySimpleClass = $(this).attr("class").replace(rlySimplePrefix+'-select',"");

		// Building Fake Select
		$(this).after("<span class='"+rlySimplePrefix+"-fake-select'><a href='javascript:void(0)' class='"+rlySimplePrefix+"-fake-link "+rlySimpleClass+"' style='width: "+rlySimpleWidth+"; height: "+rlySimpleHeight+";'>"+rlySimpleSelectedOptionTxt+"</a><ul class='"+rlySimplePrefix+"-fake-options'>"+rlySimpleContent+"</ul></span>");
		
	});


	// Clicking on fake
	$("."+rlySimplePrefix+"-fake-select > a").click(function(){
		$(this).next("."+rlySimplePrefix+"-fake-options").toggle();
	});

	$("."+rlySimplePrefix+"-fake-options > li > a").click(function(){
		var rlySimpleOptionSelect = $(this).text();
		var rlySimpleOptionSelectValue = $(this).attr("value");

		if (rlySimpleOptionSelectValue == "" || rlySimpleOptionSelectValue == null ) {
			var rlySimpleOptionSelectValue = $.trim(rlySimpleOptionSelect);
		}
		
		$(this).parents("."+rlySimplePrefix+"-fake-select").prev("select").trigger("change").val(rlySimpleOptionSelectValue);

		$(this).parents("."+rlySimplePrefix+"-fake-options").find("li > a").removeClass(rlySimplePrefix+"-active");
		$(this).addClass(rlySimplePrefix+"-active");
		$(this).parents("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-link").html(rlySimpleOptionSelect);
		$(this).parents("."+rlySimplePrefix+"-fake-options").hide();
	});

	// Clicking on true
	$(e).change(function(){
		var rlySimpleContentTrueValue = $(this).val();

		var rlySimpleContent = $(this).next("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-options > li > a[value='"+rlySimpleContentTrueValue+"']").text();
		$(this).next("."+rlySimplePrefix+"-fake-select").find("."+rlySimplePrefix+"-fake-link").text(rlySimpleContent);
	});
}