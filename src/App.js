import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthPage from './authPage';
import { getUser, logout } from './services/fetch-utils';
import Menu from './Menu';
import Order from './Order';

export default function App() {
  const [user, setUser] = useState('');
  


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
          {
            <><div><Link to="/Menu">Menu</Link></div>
              <div><Link to="/Order">Orders</Link></div></>
            
        
          }
        </header>
        <Switch>
          <Route exact path='/'>
            { 
              user 
                ? <Redirect to='/Menu'/> : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path='/Order'> 
            <Order />
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
