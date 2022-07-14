import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage({
  setUser

  
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signIn(email, password);
    setUser(user);
  }
  console.log('hello!');
  async function handleSignUp(e) {
    e.preventDefault();
    
    console.log(email, password);
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
