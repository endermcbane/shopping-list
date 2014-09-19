$(document).ready(function(){
	$("#add").click (function(){
		var my_text = $("#entry").val();
		var my_item = $('<div class="food"></div>').text(my_text); addCheckbox();
		

		my_item.on('click', '.cbox', function(){
			$(this).closest('.food').toggleClass("checked_food");
		});

		my_item.on('click', ".lite-x-red", function(){
			$(this).closest('.food').fadeOut('fast');
		});

		if (my_text!=""){
			$("#inner").append(my_item);
			$("#entry").val("");
		}

		else{alert("Type an item in before you add it.")}

	function addCheckbox() {

   $('<input />', { type: 'checkbox', class: 'food', class: "cbox"}).appendTo(my_item);
   $('<input />', { type: 'image', class: "lite-x-red"}).appendTo(my_item);
   
}
	if (my_text.length > 28) {
		alert("seriously, that is the longest dumbest name to put on a shopping list.")

	}
	});
  
  $('#inner').keypress(function(e){
    if(e.which == 13){
    	var my_text = $("#entry").val();
    	var my_item = $('<div class="food"></div>').text(my_text); addCheckbox();


			my_item.on('click', '.cbox', function(){
			$(this).closest('.food').toggleClass("checked_food");
		});

			my_item.on('click', ".lite-x-red", function(){
			$(this).closest('.food').fadeOut('fast');
		});

			if (my_text!="")
			{
				$("#inner").append(my_item);
				$("#entry").val("");
			}

			else 
			{
				alert("Type an item in before you add it.")
			}
			function addCheckbox() {

   $('<input />', { type: 'checkbox', class: 'food', class: "cbox"}).appendTo(my_item);
   $('<input />', { type: 'image', class: "lite-x-red"}).appendTo(my_item);
   
}
    }
	});
});
