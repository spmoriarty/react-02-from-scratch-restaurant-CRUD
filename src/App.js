import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/items/:id'> 
            <Items />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
