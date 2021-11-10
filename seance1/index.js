
/* 
 * Declaration des objets 
 *
 * */

//first method
const o1 = {
    firstName:"Hichem",
    lastName:"Chebbi",
    sayHello : function(){
        console.log("hello");
    }
}

//second method 
const o2 = {}
o2.firstName = "Hichem"
o2.lastName = "Chebbi"
o2.sayHello = function(){
    console.log("hello");
}

//third method using object keys 
const o3 = {}
o3["firstName"] = "Hichem"
o3["lastName"] = "Chebbi"
o3["sayHello"] = function(){
    console.log("hello");
}

/*
 *
 *  creating a copy of an object
 *
 * */


// first method using Object.assign

const copyOfO1 = Object.assign({},o1)

//second method using the spread operator : 

const copy2OfO1 = {...o1}

/*
 *
 * combining two objects
 *
 */

//first method   using spread operator
const combinedObject = {...o1,...o3,
    sayHello2 : function(){console.log("hello")},
    z:4
}

// second method using object.assign()

const combinedObject1 = object.assign(o1,o2)

/**
 *
 *  Arrays
 *
 * */

const arr = [1,2,3]

for (let i =0;i<arr.length;i++){
    console.log(arr[i])
}

// .map method
arr.map(function(e){
    console.log(e)
})


/**
 *
 *  function declaration : 
 * 
 * */

function sayHello(){
    console.log("hello")
}


// arrow functions
let sayHello1 = ()=>{
    console.log("hello from arrow function")
}

let somme = (x,y)=>x+y

function somme1(x,y){
    return x+y
}

let somme3 = (x,y)=>{
    return x+y
}

//sayHello()
//sayHello1()


/* example combining map and functions */


const chappati = [
    {
        name:"Chappati king",
        address:"bardo"
    },
    {
        name:"Chappati 7ay el mile7a",
        address:"7ay el mile7a"
    }

]
/*
 *
 * Methode "map" sur les tableaux
 *
 * 
*/


/* for (let i=0;i<chappati.length;i++){
    console.log(chappati[i].name,chappati[i].address)
}*/

let  searchChappati = (hanout)=>{
    chappati.map(chap=>{
        if(chap.name==hanout)
            console.log(chap.name,chap.address)
    })
}

searchChappati("Chappati")

/*
 *
 * Callback dans javascript 
 * 
 */
function callBack(){
    console.log("kamalt el function");
}

function func(x,y,callBack){
    console.log(x+y)
    callBack()
}

func(5,8,callBack)

/***
 *
 *  array destructuring
 *
 ***/

let arr = [1,2,3,4]

let [x,y,] = arr


/**
 *
 *Object Destructuring 
 *
 * */



let person = {
    firstName : "sayed",
    lastName : "hamdi",
    age : 23
}

let  {firstName,lastName,age }= person

// the variable firstName contains : "sayed"
// the variable lastName contains : "hamdi"
// the variable age containts : 23

