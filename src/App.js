import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
