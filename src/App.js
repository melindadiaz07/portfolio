import './App.css'
// import headshot from '../images/headshot.jpg'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Home from './components/Home'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'



function App() {

  return (
    <div className="App">
     <div id="nav-container">
    <NavBar  />
    </div>

    <Switch>

      <Route exact path="/portfolio" render={() => <Redirect to="/home" />} />

      <Route exact path='/home' render={()=> {
        return <Home />
      }} />

      <Route exact path='/about' render={()=> {
        return <About />
      }} />

      <Route exact path='/projects' render={()=> {
        return <Projects/>
      }} />

      <Route exact path='/skills' render={()=> {
        return <Skills/>
      }} />

      <Route exact path='/contact' render={()=> {
        return <Contact />
      }} />

      <Route exact path='/blog' render={()=> {
        return <Blog />
      }} />

    


    </Switch>
    </div>
  );
}

export default App;
