// selectionne le l'element html
//
//let header = document.querySelector("h1")
// DOM MANIPULATION

// bech nkhadem react ? react / reactDOM



let p = {
    nom:"Sayed",
    prenom:"Hamdi",
    adresse:"Menzah 9"
}
let p1 = {
    nom:"Ferah",
    prenom:"Ahmed",
    adresse:"Ennaser"
}
// STATE = { 
//  loggedIN?  
// }
// HTML F west JS --->  JSX ? 
function Person(props){
    console.log(props)
    if(props.nom){
        return (
            <div>
                <h2>{props.nom}</h2>
                <h2>{props.prenom}</h2>
                <p>{props.adresse}</p>
            </div>)
    }
    return <h1> mathamech nom </h1>
}

function Ghaltin(){
    return (
        <div>
        hello
        <h1>hello</h1>
        </div>
    )
}

// styling the navbar 
// Inline styling 
// Camel Case
// inline Variable 
let styles = {
    anchor :{
        color:"red",
        textDecoration:"none",
        fontSize:"22px"
    },
    header:{
        background:"orange",
        border:"1px solid green"
    }
}
function Navbar(){
    return(
        <header style={styles.header}>
            <ul>
                <li><a href="" style={styles.anchor}>Home</a></li>
                <li><a href="" style={styles.anchor}>About</a></li>
                <li><a href="" style={{...styles.anchor,color:"violet"}}>Persons</a></li>
            </ul>
        </header>
    )
}
function App(){
    return (
        <div>
            <Navbar />
            <Person nom="" prenom={p.prenom} adresse={p.adresse}/>
            <Person nom={p1.nom} prenom={p1.prenom} adresse={p1.adresse}/>
        </div>
    )
}


let rootElement = document.querySelector("#root")
ReactDOM.render(<App />,rootElement)
// modifier le dom
//header.innerHTML = "Bonjour JS pas react"



