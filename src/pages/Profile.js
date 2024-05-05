import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDone } from 'react-icons/md';
import { doc, updateDoc } from 'firebase/firestore';

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const { name, email } = formData;
  const navigate = useNavigate();

  const LogoutHandler = () => {
    auth.signOut();
    toast.success('Successfully Logout');
    navigate('/');
  };

  const onsubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser,  { displayName: name });
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, { name });
      }
      toast.success('Profile updated successfully');
    } catch (error) {
      console.log(error);
      toast.error('Error updating profile');
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  useEffect(() => {
    // Update formData after authentication process is complete
    if (auth.currentUser) {
      setFormData({
        name: auth.currentUser.displayName || '',
        email: auth.currentUser.email || '',
      });
    }
  }, [auth.currentUser]);

  return (
    <Layout>
      <div className="d-flex justify-content-between" >
        <h4  style={styles.title}>Profile Details</h4>
        <button className="btn btn-danger" onClick={LogoutHandler}>
          Log Out
        </button>
      </div>
      <div className="container mt-4 card" style={{ width: '18rem' }}>
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <p>User Personal Details</p>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                changeDetails && onsubmit();
                setChangeDetails((prevState) => !prevState);
              }}
            >
              {changeDetails ? (
                <MdOutlineDone color="green" />
              ) : (
                <FaEdit color="red" />
              )}
            </span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Enter Name
              </label>
              <input
                type="text"
                value={name}
                className="form-control"
                id="name"
                onChange={onChange}
                disabled={!changeDetails}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={onChange}
                className="form-control"
                id="email"
                disabled={!changeDetails}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
   
  );
};
const styles = {
  
title: {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop:'20px',
  color: '#333',
  textAlign: 'center'
}
}
export default Profile;
