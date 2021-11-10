import React,{useState,useEffect} from 'react';
import Button from './Components/Button'
import './App.css';

/*
class App extends React.Component {
  state={
    counter:2
  }
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    
    this.setState({counter:this.state.counter+1})
  }
  decrement(){
    this.setState({counter:this.state.counter-1})
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({counter:this.state.counter+1})
    },1000)
  }
  componentDidUpdate(){
    console.log("update")
      let app = document.querySelector(".App")
      console.log(app)
      app.style.height="100px"
  }
  render(){
    
    let counterView 
    if(this.state.counter==0){
      counterView = <h1>Valeur Nulle</h1>
    }else if (this.state.counter<0){
      counterView = <h1>Valeur Neg</h1>
    }
    else{
      counterView=<h1>{this.state.counter}</h1>
    }
    
    
    return (
    <div className="App">
      <h1>Counter APP</h1>
      {counterView}
      <Button variant handleClick={this.increment}>Increment</Button>
      <Button d={this.state.counter} handleClick={this.decrement} >Decrement</Button>
    </div>
  );
  }
}
*/
function App(){
  let [counter,setCounter] = useState(0)
  useEffect(()=>{
   console.log("bonjour awel mara")
  },[])

  useEffect(()=>{
       console.log("bonjour maa update")
  },[counter])
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      {counter}
      <button onClick={()=>setCounter(counter+1)}>increment</button>
    </div>
  )
}



export default App;
