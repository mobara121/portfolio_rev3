import React from 'react';
import './App.css';
import Navbar from './Components/Nav/Navbar.jsx';
import Home from './Components/Home';
import About from './Components/About';
import Education from './Components/Education';
import Skill from './Components/Project.jsx/Skill.jsx';
import Project from './Components/Project.jsx/Projects.jsx';
import Footer from './Components/Footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme)=> ({ 

  contents: {
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
      paddingRight: 0,
    }, 
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Route exact path="/" component={Home}/> 
      <Container maxwidth="lg" className={classes.contents}>
        <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/skill" component={Skill}/>
            <Route exact path="/project" component={Project}/>
        </Switch>   
      </Container>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
