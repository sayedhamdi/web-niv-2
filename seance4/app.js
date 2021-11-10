// fonction de base dans REACt ! 
//  React.createElement("h1",null,{});
//  ReactDOM.render()
//

class App extends React.Component {
    state = {
        todos : [],
        text : ""
    }
    constructor(){
        console.log("constructor from app")
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({todos:[...this.state.todos,this.state.text]})
    }
    handleChange(text){
        console.log(text)
        this.setState({text:text})
    }
    componentDidMount(){
        console.log("component mounted from app")
    }
    componentDidUpdate(){
        console.log("sar update feel App")
    }
    render(){
        console.log("render in app")
        if (this.state.text==""){
            return (
                  <div className="app">
                <Comp />
                   <PanelInput 
                           handleClick={this.handleClick} 
                         handleChange={this.handleChange}
                          text={this.state.text}/>
                   <TodoList 
                          todos={this.state.todos}
                  />
              </div>

            )
        }
        return (
            <div className="app">
                <PanelInput 
                        handleClick={this.handleClick} 
                        handleChange={this.handleChange} 
                        text={this.state.text}/>
                <TodoList 
                        todos={this.state.todos}
                />
            </div>
        )

    }
}
class Comp extends React.Component {
    constructor(){
        console.log("constructor COMP")
        super()
    }
    componentDidMount(){
        console.log("mounted ")
    }
    componentWillUnmount(){
        console.log("unmounted component : COMP")
    }
    render(){       console.log("render COMP")
        return <h1>comp </h1>
    }

}

function PanelInput(props){
    return (
        <div>
            <input type="text" value={props.text} 
                    onChange={(e)=>props.handleChange(e.target.value) } />
            <button onClick={()=>props.handleClick()}>add item</button>
        </div>
    )
}

function Todo(props){
    return <li>{props.text}</li>
}

let i = 1
// SMART Single responsability  
function TodoList(props){
    console.log("component todo "+i)
    return (
        <ul>
            {props.todos.map(todo=>(
                <Todo text={todo} />
            ))}
        </ul>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)












