// code synchrone / asynchrone 
//
fetch("https://en.wikipedia.org/wiki/JSON")
.then(res=>res.text())
.then(html=>console.log(html))
/*async function foo() {
   return 1
}

function plusQue5(x){
    if (x>5){
        Promise.resolve("khedmet);
    }else{
        Promise.reject("erreur")
    }
}*/
function foo(){
const resultat1 =  new Promise(resolve=>{setTimeout(()=>resolve('1'))})
    const resultat2 =  new Promise(resolve=>{setTimeout(()=>resolve('2'))})
}

foo()
