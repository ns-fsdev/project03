/*  App.js  */
/*  ReactJS To Do List App
    by Nigel Sampath
       Florida Atlantic University
       Full-Stack Developer Bootcamp
*/  

import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoMain from './ToDoMain.js';
import Contact from './Contact.js';
import About from './About.js';




function App() {
  return (
    
    <div className="App">
    
     

             <h1> ReactJS To Do List </h1>

             <br/>
             <br/>
             <br/>
             <br/>
             
       <main>
        { /* REACT_ROUTER Nav Links */ }
        
        <div id='Navbar'>
          <Link to="/"> ToDo </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
        </div>
        
        <Switch>
          <Route exact path="/" component={ToDoMain} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
       </main>
    
    </div>
  );
}

export default App;
