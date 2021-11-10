import Home from './pages/Home'
import About from './pages/About'
import {Switch,Route} from "react-router-dom"

export default function MainRouter(){
	return (
	<Switch>
       
        <Route path="/about">
          <About />
        </Route>
	 <Route path="/" exact>
          <Home />
        </Route>
	<Route path="/cats" exact>
		cats
	</Route>
	<Route path="/cats/1">
		cats 1
	</Route>
      </Switch>)
}