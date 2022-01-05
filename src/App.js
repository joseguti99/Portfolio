import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './Components/Pages/About';
import Skills from './/Components/Pages/Skills'
import Proyects from './Components/Pages/Proyects'
import Contact from './Components/Pages/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename= "/">
            <div> 
                <Switch>
                    <Route path="/Skills" exact component= {Skills}/>
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
