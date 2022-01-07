import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Feature from './components/Feature';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>

      <Header></Header>
    <Switch>
          <Route exact path="/feature">
            <Feature />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home home='Home' />
          </Route>
        </Switch>
        <Footer></Footer>

    </Router>
    </>
  );
}

export default App;
