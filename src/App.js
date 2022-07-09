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


export default function App() {
  const [user, setUser] = useState('');
  console.log(user);


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
           
            <><Link to="/Menu">Menu</Link><Link to="/Order">Order</Link></>
          
           
          }
        </header>
        <Switch>
          <Route exact path='/'>
            { 
              user 
                ? <Redirect to='/Menu'/> : <AuthPage setUser={setUser} />
            }
          </Route>
          <Route exact path='/items/:id'> 
            {/* <Items /> */}
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
