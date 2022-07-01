import { useState } from 'react';
import { createMenu } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Menu() {
  const history = useHistory();
  const [entree, setEntree] = useState('');
  const [side, setSide] = useState('');
  const [drink, setDrink] = useState('');
  const [comment, setComment] = useState('Special request?');
 
  async function handleSubmit(e) {
    e.preventDefault();

    await createMenu({ entree, side, drink, comment 
    });
    history.push(Menu);
  }

  return (
    <div className='menu'>
      <form onSubmit={handleSubmit}>
        <h2> What would you like?</h2>
        <label>
            Entree: Pick one of 4 daily special types
        </label>
        <select required onChange={e => setEntree(e.target.value)}>
          <option>Meat</option>
          <option>Poultry</option>
          <option>Fish</option>
          <option>Vegetarian</option>
        </select>
        <label>Choose a beverage
          <input required onChange={e => setDrink(e.target.value)}/>
        </label>
        <label>Choose a side
        </label>
        <select required onChange={e => setSide(e.target.value)}>
          <option>Starch</option>
          <option>Veggies</option>
          <option>Soup</option>
          <option>Salad</option>
        </select>
        <label>
              Special Instructions:
          <textarea required onChange={e => setComment(e.target.value)}/>
        </label>
        
      </form>
    </div>
  );
}