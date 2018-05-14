function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	function drawTime() {
		var myVar = setInterval(myTimer, 1000);

		function myTimer() {
			var d = new Date();
			document.getElementById("time").innerHTML = d.toLocaleTimeString();
		}
	}
	drawTime()

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		console.log(todos)
		var todosarr = todos['data']
		console.log(todosarr)
		var template = ''
		document.getElementById('todoCount').innerText = todosarr.length
		for (var j = 0; j < todosarr.length; j++) {

			var todoItem = todosarr[j]

			if (todoItem.completed == false) {
				template += `
				<div><input type="checkbox" id="${todoItem._id}" onclick="app.controllers.toDoController.toggleTodoStatus('${todoItem._id}', ${getTodos})"> ${todoItem.description}</div>
				`
			} else {
				template += `
				<div><input type="checkbox" id="${todoItem._id}" onclick="app.controllers.toDoController.toggleTodoStatus('${todoItem._id}', ${getTodos})" checked><span class="todoFormat"> ${todoItem.description.strike()}</span>
				<i onclick="app.controllers.toDoController.removeTodo('${todoItem._id}')"class="fas fa-trash-alt"></i></div>
				`
			}
		}
		document.getElementById('todolist').innerHTML = template
		//DONT FORGET TO LOOP
	}
	getTodos()

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.newtodo.value,
			completed: false,
			user: 'Jasper'
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}


	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}
