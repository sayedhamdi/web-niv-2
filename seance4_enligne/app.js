// REACT fel version jdida yekhdem bel hooks
// classComponents 



class App extends React.Component{
    //state c'est toujours un objet
    state = {
        text:"todo",
        todos:["todo 1"]
    }
   //constructor 
    constructor(){
       super();
        this.handleChange=this.handleChange.bind(this)
        this.zidKaaba = this.zidKaaba.bind(this)
    }
    handleChange(text){
        this.setState({text:text})
    }
    zidKaaba(){
        // nekhou el state -> text
        // n'ajoutih lel liste de todo
        this.setState({
            todos : [...this.state.todos,this.state.text]
        })
    }
    render(){
        return (
            <div style={{color:'red'}}>
                <AddTodo zid={this.zidKaaba} handleChange={this.handleChange}
            text={this.state.text}/>
            <p>{this.state.text}</p>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

function AddTodo(props){
    return (
        <div>
        <input onChange={(e)=>{
            props.handleChange(e.target.value)
        }}value={props.text} type="text" placeholder="add todo"/>
        <button onClick={()=>props.zid()}>Add todo </button>
        </div>
    )
}
function TodoList(props){
    console.log(props)
    if(props.todos.length==0){
        return <p>no todo's</p>
    }
    return (
        <ul>
            {props.todos.map(todo=>
                (<li>{todo}</li>)
            )}
        </ul>
    )   
}



//rendering 
let rootElement = document.getElementById("root")
ReactDOM.render(<App />,rootElement)
