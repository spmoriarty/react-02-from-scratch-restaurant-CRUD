import { useState } from 'react';
import { createMenu } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function Menu() {
  const history = useHistory();
  const [entree, setEntree] = useState('meat');
  const [side, setSide] = useState('veggies');
  const [drink, setDrink] = useState('soda');
  const [comments, setComment] = useState('Special request?');
  
 
  async function handleSubmit(e) {
    e.preventDefault();
    
    await createMenu({ entree, side, drink, comments 
    });
    history.push('/Order');
  }

  return (
    <div className='menu'>
      <form onSubmit={handleSubmit}>
        <h2> What would you like?</h2>
        <label>
            Entree: Pick one of 4 daily special types
        </label>
        <select required onChange={e => setEntree(e.target.value)}>
          <option value='meat'>Meat</option>
          <option value='poultry'>Poultry</option>
          <option value='fish'>Fish</option>
          <option value='vegetarian'>Vegetarian</option>
        </select>
        <label>
          Choose a beverage
        </label>
        <select required onChange={e => setDrink(e.target.value)}>
          <option>Soda</option>
          <option>Milk</option>
          <option>OJ</option>
          <option>Water</option>
        </select>
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
          <textarea onChange={e => setComment(e.target.value)}/>
        </label>
        <button>Submit</button>
        
      </form>
    </div>
  );
}