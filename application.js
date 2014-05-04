$(document).ready(function(){

function checkitem(){
	$(this).toggleClass('checked');
}

function addItem(){
	var inputitem = $('#listinput').val();
	if (inputitem=== ''){
		return;
	} else {
		item= '<li>' +inputitem + '</li>';
		$(item).appendTo('#list');
		$("#listinput").val('');
	}
}


$('#listinput').keypress(function(event){
		if(event.keyCode==13){
			event.preventDefault();
			addItem();
		}
	});

$('button').click(addItem);
$("#list").on('click', 'li', checkitem);

});