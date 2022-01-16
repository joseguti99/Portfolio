import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './Components/Pages/About';
import Skills from './/Components/Pages/Skills'
import Proyects from './Components/Pages/Proyects'
import Contact from './Components/Pages/Contact'
import Desarrollo from './Components/Pages/Skills/DesarrolloWeb'
import Javascript from './Components/Pages/Skills/Javascript'
import ReactCoder from './Components/Pages/Skills/ReactJs-Coder'
import ReactUdemy from './Components/Pages/Skills/ReactJs-Udemy'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename= "/">
            <div> 
                <Switch>
                    <Route path="/Skills" exact component= {Skills}/>
                    <Route path="/Skills/Desarrollo-Web" exact component= {Desarrollo}/>
                    <Route path="/Skills/Javascript" exact component= {Javascript}/>
                    <Route path="/Skills/React-js-Coder" exact component= {ReactCoder}/>
                    <Route path="/Skills/React-js-Udemy" exact component= {ReactUdemy}/>
                    <Route path="/Proyects" exact component= {Proyects}/>
                    <Route path="/Contact" exact component= {Contact}/>
                    <Route path="*" exact component={About}/>
                </Switch>
                </div>
      </BrowserRouter>
      </div>
  );
}

// ARREGLAR EL ROUTER QUEDO DESARMADO
export default App;
