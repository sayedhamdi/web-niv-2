let users 
let table = document.querySelector('table');
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
	
	//une connexion elle a été etablie 
	return response.json()
	
})
.then(data=>{
	console.log(data)
	// je recupere mes données
	users=data
	loadUsers(data)
})
.catch(err=>{
	console.log(err)
})

function displayALine(user){
	return `<tr>
		<td>${user.name}</td>
		<td>${user.address.city}</td>
		<td>${user.email}</td>
		<td>${user.phone}</td>
		</tr>
	`
}
// code async --> (promise) ?resolved | rejected
function loadUsers(users){
	table.innerHTML=""

	users.map(user =>{
		table.innerHTML+=displayALine(user)
	})
}

document.querySelector("input").onkeydown = (e)=>{
	let text = e.target.value
	let filtredUsers = users.filter(user=>{
		return user.name.toLowerCase().includes(text) || user.address.city.toLowerCase().includes(text) 
	})
	loadUsers(filtredUsers)	
}