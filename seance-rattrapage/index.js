//object --- 
let r = 8 



function sayHi(){
    console.log("bonjour");
}
console.log(sayHi.prototype)
console.log(typeof(sayHi))
//es6 syntax

//
const sayHi1 = function(name){
    console.log("bonjour "+name)
}


const sayHi2 = (name)=>{
    console.log("hi "+ name);
}
//Callback 
// c'est l'invocation d'une fonction en parametre
//
function displayAdd(result){
    console.log(result);
}

function calculateur(x,y,callback){
    let result = x+y
    callback(result);
}

calculateur(5,8,displayAdd)

// Array
//

let fruits = ["apple","orange","grapes"]

for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// higher order functions
//  map 
//
function afficher(element){
    console.log(element);
}
// kima el boucle for => tekhou callback // il y a un retour
let i = 0
let newFruitsArray = fruits.map(fruit=> {
    i++
    return fruit + " "+ i
})

function addTofruit(fruit,i) {
      i++
      return fruit + " "+ i
}
console.log("new fruits array : ",newFruitsArray)

let randomNumbers = [4,8,9,11,27,13,68]
console.log(randomNumbers)
const filtredArray = randomNumbers.filter(n=>{
    return n % 2 == 0
})

console.log(filtredArray)

let things = [ {thing:"shirt",price:25},
               {thing:"pants",price:70},
                {thing:"shoes",price:50}
]
let prices = [25,70,50]
const total = things.map(t=>t.price).reduce((accumulator,price)=>{
    return accumulator+price;
})

function map(arr,func){
    for (let i=0;i<arr.length;i++){
        func(arr[i]);
    }
}

map(prices,function(e){
    console.log("price + 1 =  "+(e+1))
})

console.log(total)
/*
for (let i=0;i<things.length;i++){
    total += things[i].price;
}
console.log(total)*/
console.log(prices.forEach(e=>{
    console.log(e)
}))

//Higher order methods / functions 
//
//Map , Reduce, filter, forEach, callBack 
//
//enek 3adit une fonction l une autre fonction l'execution sar au niveau mtaa fonction 

