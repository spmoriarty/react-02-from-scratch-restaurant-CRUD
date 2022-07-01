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

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUp(email, password);
    setUser(user);

  }

  return (
    <><div className='authorize'>
      <h1>Welcome to the food Bazar</h1>
      <hr />
      <form>
        <label>
                  Email:
          <input required type='email' onChange={e => setEmail(e.target.value)} value='email' />
        </label>
        <label>Password:
          <input required type='password' onChange={e => setPassword(e.target.value)} value='password' />
        </label>
        <button type='submit' onChange={handleSignUp}>Sign Up</button>
        <button type='submit' onChange={handleSignIn}>Sign In</button>
      </form>
    </div><hr /></>
  );
}