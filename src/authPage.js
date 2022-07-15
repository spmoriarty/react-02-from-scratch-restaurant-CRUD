import { useState } from 'react';
import { signUp } from './services/fetch-utils';

export default function AuthPage({
  setUser

  
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleSignIn(e) {
  //   e.preventDefault();
  //   const user = await signIn(email, password);
  //   setUser(user);
  // }
  
  async function handleSignUp(e) {
    e.preventDefault();
    
    const user = await signUp(email, password);
    setUser(user);

  }

  return (
    <div className='authorize'>
      <h1>Welcome to the food Bazar</h1>
      <hr />
      <form onSubmit={handleSignUp} >
        <label>
        Email:
          <input required type='email' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>Password:
          <input required type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <button type='submit'>Sign Up</button>
        <button type='submit'>Sign In</button>
      </form>
    </div>
    
  );
}
