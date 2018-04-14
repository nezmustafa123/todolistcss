// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});

//// check off specific todos by clicking
//
//$("li").click(function(){
//	$(this).css("color", "gray");
//	$(this).css("text-decoration", "line-through");
//     //css method color gray text decoration line through
//      //use this
//  });
//
////use object but have to use camelcase and not hyphen
//$("li").click(function(){
//	//if li is gray
//	if($(this).css("color") === "rgb(128,128,128)"){
//		//turn it black object
//		$(this).css({
//			color: "black",
//			textDecoration: "none"
//		});
//	}
//	//else
//	else {
//
//        //turn it gray 
//		$(this).css({
//			color: "gray",
//			textDecoration: "line-through"
//		});
//	}
//
//});
//
//
////can also do 
//
//$("ul").on("click", "li", function(){
//	$(this).toggleClass("completed");
//}); //select ul but add SECOND ARGUMENT 
////WHEN LI IS CLICKED INSIDE UL RUN THIS CODE
////account for elements that don't exist yet
//
//
//
//
//
////click on x to delete todo ]//span is inside the li ul div body etc
//$("ul").on("click", "span", (function(event){//event object
//	$(this).parent().fadeOut(500,function(){
//		//fadeout on the li
//        $(this).remove(); //remove the li
//	}); //remove the parent li make use of callback from fadeout
//	event.stopPropagation();//stop bubbling up after span click
//});
//
//// $("ul").click(function(){
//// 	alert("clicked on ul!");
//// });
//
//// $("#container").click(function(){
//// 	alert("clicked on container div!");
//// });
//
//// $("body").click(function(){
//// 	alert("clicked on body!");
//// });
//
////event bubbling initially triggeered on the span bubbles up into parent elements
//
//
//
//$("input[type='text'").keypress(function(event){//callback
//	if(event.which === 13){ //13 is code for enter key
//		//grab new text form input
//		var todoText = $(this).val(); //save this value
//        $(this).val(""); //empty input
//
//		//create a new li and add to ul
//		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>") //opening li and closing li
//	}
//});
//
//
//
//$(".fa fa-plus").click(function(){
//	$("input[type='text']").fadeToggle();
//});