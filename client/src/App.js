import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from "./components/Landing"
import Home from './components/Home';
import Detail from './components/Detail';
import AddActivity from "./components/AddActivity"

function App() {
  return (
<BrowserRouter>

    <div className="App">
   <Switch>
      <Route exact path="/" component={Landing}></Route>
      <Route  exact path="/Home" component={Home}/>
      <Route exact path="/Activity" component={AddActivity}/>
      <Route exact path="/countries/:id" component={Detail}/>
     </Switch>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
