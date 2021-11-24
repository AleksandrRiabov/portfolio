import './App.css';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from './pages/Portfolio/Portfolio';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Project from './pages/Project/Project';
import NotFound from './pages/NotFound/NotFound';

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
          <Route path="/portfolio/:projectName" exact>
            <Project />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contacts" exact>
            <Contacts />
          </Route>
			<Route path="/*" component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
