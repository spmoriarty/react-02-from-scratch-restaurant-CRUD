import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthPage from './authPage';
import { getUser, logout } from './services/fetch-utils';


export default function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      if (user) setUser();
    }
    fetch();
  }, []);

  async function handleLogout() {
    await logout();
    setUser(null);
  }
  
  return (
    <Router>
      <div className='App'>
        <header>
          <button onClick={handleLogout} >Logout</button>
        </header>
        <Switch>
          <Route exact path='/'>
            { 
              user 
                ? <Redirect to='/menu'/> : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path='/items/:id'> 
            {/* <Items /> */}
          </Route>
          <Route exact path='/menu'>
            {/* <Menu /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
