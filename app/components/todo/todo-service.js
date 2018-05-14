function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/Jasper/todos'

	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}


	this.getTodos = function (draw) {
		//@ts-ignore
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				//	console.log(res)
				todoList = res['data']
				console.log(res)
				draw(res)
			})
			.fail(logError)
	}

	this.addTodo = function (todo, cb) {
		// WHAT IS THIS FOR???
		//	var newToDo = new ToDo(todo.todo)
		//	console.log(todo)

		//@ts-ignore

		$.post(baseUrl, todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				cb()
			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId, cb) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		//debugger
		var todoish = {}
		for (var j = 0; j < todoList.length; j++) {
			if (todoList[j]._id == todoId) {
				todoish = todoList[j]
			}
		}

		todoish.completed = !todoish.completed

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist

		//@ts-ignore
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoish)
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				cb(res)
			})
			.fail(logError)
	}

	this.removeTodo = function (todoId, cb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
		//@ts-ignore
		$.ajax({
			method: 'DELETE',
			url: baseUrl + '/' + todoId,
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				cb(res)
			})
			.fail(logError)
	}


}
