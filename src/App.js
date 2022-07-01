import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react/cjs/react.production.min';
import AuthPage from './authPage';
import { getUser } from './services/fetch-utils';


export default function App() {
const [user, setUser] = useState(null);


  useEffect(() => {
    async function fetch() {
      const user = await getUser();
      if (user) setUser();
    }
    fetch();
  }, []);
  
  return (
    <Router>
      <div className='App'>
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
          <Route exact path='/create'>
            {/* <Create /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
