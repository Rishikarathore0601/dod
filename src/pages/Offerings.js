import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Offerings = () => {
  const [offerings, setOfferings] = useState([
    {
      id: 1,
      name: 'Laptop',
      purchasingDate: '2024-04-01',
      workingStatus: 'Working',
      issue: '',
      costPrice: 500,
      type: 'sell',
      address: '123 Main St, City',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Smartphone',
      purchasingDate: '2024-04-05',
      workingStatus: 'Working',
      issue: '',
      costPrice: 300,
      type: 'rent',
      address: '456 Elm St, Town',
      image: 'https://via.placeholder.com/150'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    purchasingDate: '',
    workingStatus: 'Working',
    issue: '',
    costPrice: '',
    type: 'sell',
    address: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOffering = {
      id: Math.random(),
      name: formData.name,
      purchasingDate: formData.purchasingDate,
      workingStatus: formData.workingStatus,
      issue: formData.issue,
      costPrice: formData.costPrice,
      type: formData.type,
      address: formData.address,
      image: formData.image
    };
    setOfferings([...offerings, newOffering]);
    setFormData({
      name: '',
      purchasingDate: '',
      workingStatus: 'Working',
      issue: '',
      costPrice: '',
      type: 'sell',
      address: '',
      image: ''
    });
  };

  const removeOffering = (id) => {
    const updatedOfferings = offerings.filter(offer => offer.id !== id);
    setOfferings(updatedOfferings);
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>My Offerings</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Device Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />
          </label>
          <label style={styles.label}>
            Purchasing Date:
            <input type="date" name="purchasingDate" value={formData.purchasingDate} onChange={handleChange} required style={styles.input} />
          </label>
          <label style={styles.label}>
            Working Status:
            <select name="workingStatus" value={formData.workingStatus} onChange={handleChange} required style={styles.input}>
              <option value="Working">Working</option>
              <option value="Not Working">Not Working</option>
            </select>
          </label>
          <label style={styles.label}>
            Issue (if any):
            <input type="text" name="issue" value={formData.issue} onChange={handleChange} style={styles.input} />
          </label>
          <label style={styles.label}>
            Price:
            <input type="number" name="costPrice" value={formData.costPrice} onChange={handleChange} required style={styles.input} />
          </label>
          <label style={styles.label}>
            Type:
            <select name="type" value={formData.type} onChange={handleChange} required style={styles.input}>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </select>
          </label>
          <label style={styles.label}>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required style={styles.input} />
          </label>
          <label style={styles.label}>
            Image URL:
            <input type="text" name="image" value={formData.image} onChange={handleChange} required style={styles.input} />
          </label>
          <button type="submit" style={styles.addButton}>Add Offering</button>
        </form>
        <div style={styles.offeringsList}>
          {offerings.map(offer => (
            <div key={offer.id} style={styles.offering}>
              <img src={offer.image} alt={offer.name} style={styles.offerImage} />
              <div style={styles.offerDetails}>
                <h3>{offer.name}</h3>
                <p>Purchasing Date: {offer.purchasingDate}</p>
                <p>Status: {offer.workingStatus}</p>
                {offer.issue && <p>Issue: {offer.issue}</p>}
                <p>Price: ${offer.costPrice}</p>
                <p>Type: {offer.type}</p>
                <p>Address: {offer.address}</p>
                <button onClick={() => removeOffering(offer.id)} style={styles.removeButton}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333'
  },
  form: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    marginBottom: '10px'
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  offeringsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  offering: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '600px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
  },
  offerImage: {
    width: '150px',
    height: 'auto'
  },
  offerDetails: {
    textAlign: 'left'
  },
  removeButton: {
    padding: '8px 16px',
    fontSize: '14px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Offerings;
