import React, { useState } from 'react';

const Gateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Perform payment processing here using a payment gateway service
    // You'll need to integrate with an actual payment gateway like Stripe, PayPal, etc.
    // This is just a placeholder for demonstration purposes.
    alert('Payment processed successfully!');
  };

  return (<div>
    <div><h1>Welcome to BookWorm.....</h1></div>
    <div style={{ display: 'flex', justifyContent: 'center', borderRadius:'5px',alignItems: 'center', minHeight: '70vh' }}>
        
      <div className="card">
        <h5 className="card-header">Payment Gateway</h5>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              className="form-control"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
            />
          </div>
          <img src='./images/Gateway.jpg' class="card-img-top my-2" alt="Gateway"/>
          
        </div>
        <button className="btn btn-secondary my-1" onClick={handlePayment}>
            Process Payment
          </button>
      </div>
    </div>
    </div>
  );
};

export default Gateway;
