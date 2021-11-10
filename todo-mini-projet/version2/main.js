
// supposer que j'ai des todos items


let todos = JSON.parse(localStorage.getItem('todos'))
console.log(typeof(todos))

//afficher les todos existente 
 
// selectionner les elements html
let input = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")


function loadOldTodos(){
	if(todos){
		todos.map(todo =>{
			addToUl(todo.todo,todo.checked,todo.id)
		})
	}
	else{
		todos = []
	}
}
loadOldTodos()


button.onclick = ()=>{
	ajouterTodo()
	
}
input.onkeydown = (e)=>{
	if(e.keyCode == 13){
		ajouterTodo()
	}
}

function ajouterTodo(){
	// recuperer valuer de l'input
	let text  = input.value
	// validation 
	if (text.length==0){
		input.style.border="1px solid red"
		return
	}else{
		input.style.border="1px solid grey"
	}
	addToUl(text,false)
	let todo = {
		todo : text,
		checked:false,
		id:todos.length+1
	}
	console.log(todos)
	todos.push(todo)
	console.log(todos)
	localStorage.setItem("todos",JSON.stringify(todos))
	//ul.innerHTML +="<li><input type='checkbox'/>"+text+"</li>"
	// creer le todo 
	cleanInput()
}

function addToUl(text,checked,id){
	let li = document.createElement("li")
	let checkbox = document.createElement("input")
	let span = document.createElement("span")
	// remplir le todo 
	if(id){
		li.setAttribute("id",id)
	}else{
		li.setAttribute("id",todos.length+1)

	}
	span.innerText = text
	checkbox.setAttribute("type","checkbox")
	checkbox.checked=checked
	checkboxStyle(checkbox,li)
	li.appendChild(checkbox)	
	li.appendChild(span)
	ul.appendChild(li)
	
	checkbox.onclick = (e)=>{
		let id = e.target.parentNode.id
		todos.map(todo=>{
			if(id==todo.id){
				todo.checked=!todo.checked
			}
		})
		localStorage.setItem("todos",JSON.stringify(todos))

		checkboxStyle(checkbox,e.target.parentNode)
	}
	checkbox.onkeydown = (e)=>{
		console.log(typeof(e.key))
		
		if( e.key == "Enter"){
			let id = e.target.parentNode.id
			todos.map(todo=>{
				if(id==todo.id){
					todo.checked=!todo.checked
				}
			})
			localStorage.setItem("todos",JSON.stringify(todos))
	
			checkboxStyle(checkbox,e.target.parentNode)
		}
	}
	
}


function checkboxStyle(checkbox,li){
	if(checkbox.checked)
		li.style.textDecoration="line-through"
	else 
		li.style.textDecoration="none"
}

// Persistence des données ? 
//localStorage.setItem("x",5)

// quelle est la structure de donnée adequate lel application !!?

// todo list 

// tableau - liste ?

// Main data structure || structure de donnée
// liste entier, liste boolean, liste chaine de caractere, 
// Reponse : une liste d'objet 


console.log(localStorage.getItem("x"))

// les types ? boolean / number / string
// 

function cleanInput(){
	input.value="";
}