/*The payment page for the user, where they will put CC number, zip code, and other information*/
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PaymentContext from '../PaymentContext';

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expDate, setExpDate] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [userID, setUserID] = useState('');
  const [amount, setAmount] = useState('');
  

  const { setPaymentData } = useContext(PaymentContext);
  const navigate = useNavigate();

  const handlePayment = async (event) => {
    event.preventDefault();
    const paymentData = {
      cardNumber,
      cardName,
      cardNumber,
      expDate,
      zipCode,
      userID,
      amount
    };
    
    setPaymentData(paymentData);
  
    try {
      const response = await fetch('http://localhost:3001/api/add-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
  
      if (!response.ok) throw new Error('Payment submission failed');
    // Here, you could use the response data or the paymentData for the receipt
    const result = await response.json();
    navigate('/confirmation', { state: { ...result } });
  } catch (error) {
    console.error('Payment processing error:', error);
  }
};
  

return (
  <div className="container">
    <header>
      <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
      <h1>Panther Park</h1>
    </header>
    <h2 className="page-title">Payment Information</h2>
    <form onSubmit={handlePayment} className="payment-form">
      <input 
        type="text"
        placeholder="User ID"
        className="input-field"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <input 
        type="text"
        placeholder="Amount"
        className="input-field"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Expiration Date (MM/YY)" 
        className="input-field" 
        value={expDate} 
        onChange={(e) => setExpDate(e.target.value)}
      />
      <button type="submit" className="button">Make Payment</button>
    </form>
    <div className="content">
      <Link to="/login">
        <button className="button">Back to Login Page</button>
      </Link>
      <Link to="/">
        <button className="button">Back to Home</button>
      </Link>
    </div>
    <footer>
      {/* Footer content here */}
    </footer>
  </div>
);
}

export default PaymentPage;
