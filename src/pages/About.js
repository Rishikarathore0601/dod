import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () =>  {
   return (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.paragraph}>Welcome to our website!</p>
      <p style={styles.paragraph}>We are dedicated to providing high-quality products and services.</p>
      <p style={styles.paragraph}>Feel free to contact us if you have any questions or inquiries.</p>
    </div>
  </Layout>
);
}

const styles = {
container: {
  textAlign: 'center'
},
title: {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop:'20px',
  color: '#333'
},
paragraph: {
  fontSize: '18px',
  marginBottom: '10px',
  color: '#666'
}
};

export default About