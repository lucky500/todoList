'use strict';

$(document).ready(init);


function init(){
	getAllTodos;
	$('#addButton').click(getItem);

}


function getAllTodos(){
var items = $('#addItems').val();
console.log(items);

}

function getItem(){
	$('.desc').val();
	$('.dueDate').val();
}


function getAllTodos(){
	$.ajax({
		method: 'GET',
		url: '/todos',
		success: function(todos){
			var $todos = todos.map(function(todo){
				var $todo = $('#template').clone();
				$todo.find('.desc').text(todo.desc);
				$todo.find('.dueDate').text(todo.dueDate);
				$todo.find('input').prop('checked', todo.isComplete);
				return $todo;
			});

			$('#todoTable').append($todos);
		}
	})
}