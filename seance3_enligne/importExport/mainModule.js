import {add, subs } from "./calculatriceModule.js"
function main(){
    let x = 5;
    let y = 8;


    let rAdd = add(x,y);
    let rSubs = subs(x,y);
    console.log(`resultat est ${rAdd}`)
    console.log(`resultat subs  est ${rSubs}`)
}

main()
