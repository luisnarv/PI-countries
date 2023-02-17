import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Landing from "./components/Landing"
import Home from './components/Home';
import Detail from './components/Detail';
import AddActivity from "./components/AddActivity"
// import Navbar from './components/navBar';
// import { useLocation } from 'react-router-dom';




function App() {

  // const location = useLocation()
  


  return (
<BrowserRouter>

    <div className="App">
    {/* <div>
            {location.pathname === "/" || location.pathname === "/newUser" ? null : <Navbar/>}
          </div> */}

   <Switch> 
      <Route exact path="/" component={Landing}></Route>  
     
      <Route  exact path="/Home" component={Home}/>
      <Route  path="/Activity" component={AddActivity}/>
      <Route  path="/countries/:id" component={Detail}/>
     </Switch>
     
    </div>
    
    </BrowserRouter>
  );
}

export default App;
