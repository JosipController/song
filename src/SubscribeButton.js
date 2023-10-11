import React, { useState } from 'react';
import Modal from 'react-modal';
import './SubscribeButton.css';
import logofav from './fav.png';

const SubscribeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subscriptionType: 'listener', // Default subscription type
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8888/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Subscription successful');
        // Close the modal or show a success message to the user
        closeModal();
      } else {
        console.error('Subscription failed');
        // Handle errors or show an error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <>
      <button className="subscribe-button" onClick={openModal}>
        SUBSCRIBE
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className={`modal ${showModal ? 'open' : ''}`}
        overlayClassName="overlay"
      >
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={logofav} alt="Logofav" className="logo-fav" />
            <h1 className="modul-heading">JOIN SONGFULLY</h1>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-pick-subscribe">
              <label>Subscription Type:</label>
              <div className="radio-buttons">
                <label>
                  <input
                    type="radio"
                    name="subscriptionType"
                    value="creator"
                    checked={formData.subscriptionType === 'creator'}
                    onChange={handleChange}
                  />{' '}
                  Creator
                </label>
                <label>
                  <input
                    type="radio"
                    name="subscriptionType"
                    value="listener"
                    checked={formData.subscriptionType === 'listener'}
                    onChange={handleChange}
                  />{' '}
                  Listener
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default SubscribeButton;
