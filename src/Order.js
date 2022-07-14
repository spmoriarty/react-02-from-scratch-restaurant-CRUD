import React from 'react';
import { useEffect, useState } from 'react';
import { getMenu } from './services/fetch-utils';
import { Link } from 'react-router-dom';

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function grab() {
      const data = await getMenu();
      console.log(data);
      setOrders(data);
    }
    grab();
  }, []);

 
  return (
    <><div>here i am</div><div className='orders'>
      {orders && orders.map(order => <Link key={order.id + order.entree} to={`/edit/${order.id}`}>
        <div className='order'>
          <p>Your {order.entree} </p>
          <p> will have a side of{order.side} </p>
          <p>with a drink {order.drink}.</p>
          <p>Special Considerations: {order.comments} </p>
        </div>
      </Link>)}
    </div></>
  );
}
