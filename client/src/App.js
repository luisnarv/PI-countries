import './App.css';
import {BrowserRouter, Route, useLocation, Switch} from "react-router-dom"
import Landing from "./components/Landing"
import Home from './components/Home';
import Detail from './components/Detail';
import AddActivity from "./components/AddActivity"

 import Navbar from './components/navBar';
// import { useLocation } from 'react-router-dom';




function App() {

  // const location = useLocation()
  
  const location = useLocation()

  return (
<BrowserRouter>

    <div className="App">
    

<div>
 { location.path === "/" ||  location.path === "/Activity" || location.pathname === "/countries/:id" ? null : <Navbar />}
</div>

   <Switch> 
    
      <Route exact path="/" component={Landing}></Route>  
       
      <Route  path="/Activity" component={AddActivity}/>
      <Route  path="/countries/:id" component={Detail}/>
 <Route  exact path="/Home" component={Home}/>


     </Switch>
     
    </div>
    
    </BrowserRouter>
  );
}

export default App;
