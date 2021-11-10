function add(x,y){
    return x+y
}
function mult(x,y){
    return x*y
}

function subs(x,y){
    return x-y;
}

function div(x,y){
    return x/y;
}

function reste(x,y){
    return x%y;
}
// chaque fichier c'est un module 
module.exports = {
    "ajouter":add,
    mult,
    reste,
    subs
}

