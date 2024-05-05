
import Layout from '../components/Layout/Layout'
import React, { useState } from 'react';
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Laptop',
      purchaseDate: '2024-04-01',
      price: 500,
      type: 'sell',
      location: 'New York',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Smartphone',
      purchaseDate: '2024-04-05',
      price: 300,
      type: 'rent',
      rentPeriod: 'Weekly',
      location: 'Los Angeles',
      image: 'https://via.placeholder.com/150'
    }
  ]);

  const removeItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const bookChat = (item) => {
    // Your logic for booking a chat goes here
    console.log('Booking chat for:', item);
  };
  return (
    <Layout>
       <div>
      <h1 style={styles.item}> My Cart</h1>
      {cartItems.map(item => (
        <div key={item.id} style={styles.item}>
          <img src={item.image} alt={item.name} style={styles.image} />
          <div style={styles.details}>
            <h3>{item.name}</h3>
            <p>Purchase Date: {item.purchaseDate}</p>
            <p>Price: ${item.price}</p>
            <p>Type: {item.type}</p>
            {item.rentPeriod && <p>Rent Period: {item.rentPeriod}</p>}
            <p>Location: {item.location}</p>
            <button onClick={() => removeItem(item.id)} style={styles.button}>Remove from Cart</button>
            <button onClick={() => bookChat(item)} style={styles.button}>Book a Chat</button>
          </div>
        </div>
      ))}
    </div>
    </Layout>
  )
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px'
  },
  image: {
    width: '150px',
    height: 'auto',
    marginRight: '20px'
  },
  details: {
    textAlign: 'left'
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft: '10px'
  }
};

export default Cart;
