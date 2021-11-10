console.log("yekhdem")

// liée lel dom 
//document.body.style.background="black"


// Events 
// a lot of events fi js 
// click  - double click - mouse over | hover - onfocus - onblur
// scroll - onload 



// Event Listener )))== onclick - myFunction 
// un element -> nzidou event listener -> bind the function 

// liée l'evenement a une function 
/*

window.addEventListener("load",function(){

	// ay code lena 

	document.body.style.background = "black"
})
*/
/*
let counter = 0
window.onload = ()=>{
	setInterval(()=>{
		counter++
		console.log(counter)
	},1000)
	document.body.style.background = "black"
}

window.onbeforeunload = ()=>{
	localStorage.setItem("counter",counter)
	console.log("closed")
	// envoyer le temps au serveur 
}*/


// selectionner les elements html
let input = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
button.onclick = ()=>{
	ajouterTodo()
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
	//ul.innerHTML +="<li><input type='checkbox'/>"+text+"</li>"
	// creer le todo 

	let li = document.createElement("li")
	let checkbox = document.createElement("input")
	let span = document.createElement("span")
	// remplir le todo 
	span.innerText = text

	checkbox.setAttribute("type","checkbox")
	/*checkbox.onclick = ()=>{
		console.log(checkbox)
		if(checkbox.checked)
			li.style.textDecoration="line-through"
		else 
			li.style.textDecoration="none"		
	}*/
	// ajouter le todo a l'ul
	li.appendChild(checkbox)	
	li.appendChild(span)
	ul.appendChild(li)
	document.querySelectorAll("li").forEach(li=>{
	console.log()
	let checkbox=  li.querySelector("input")
	checkbox.onclick = ()=>{
		console.log(li)
		if(checkbox.checked)
			li.style.textDecoration="line-through"
		else 
			li.style.textDecoration="none"
	}
	})
}


