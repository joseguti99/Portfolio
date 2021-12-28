import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/Pages/About';
import Skills from './/Components/Pages/Skills'
import Proyects from './Components/Pages/Proyects'
import Contact from './Components/Pages/Contact'
import Error from './Components/Pages/Error'

function App() {
  return (
    <div className="App">
      <BrowserRouter basename= "/Home">
          <div className="d-flex">
            <NavBar/>
              <div className="content w-100">
                <Switch>
                  <Route path="/" exact component= {About}/>
                  <Route path="/Skills" exact component= {Skills}/>
                  <Route path="/Proyects" exact component= {Proyects}/>
                  <Route path="/Contact" exact component= {Contact}/>
                  <Route path="*" exact component={Error}/>
                </Switch>
              </div>
          </div>
      </BrowserRouter>
    </div>
  );
}

// ARREGLAR EL ROUTER QUEDO DESARMADO
export default App;
