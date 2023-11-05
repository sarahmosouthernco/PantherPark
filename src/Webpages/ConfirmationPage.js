/*The payment confirmation page*/

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PaymentContext from '../PaymentContext';
import './ConfirmationPage.css';
import { useLocation } from 'react-router-dom';


function ConfirmationPage() {
  const location = useLocation();
  const { paymentData } = useContext(PaymentContext);


  return (
    <div className="container">
      <header>
        <img src="/gsu_logo.png" alt="Georgia State University Logo" width="100" />
        <h1>Panther Park</h1>
      </header>
      <h2>Payment Confirmed</h2>
      <h3>Thank you for your recent transaction!</h3>
      <div className="receipt-box">
        <h4>Transaction Details:</h4>
        <p>User ID: {paymentData.userID}</p>
        <p>Amount Paid: ${paymentData.amount}</p>
        <p>Transaction Date: {paymentData.expDate}</p>
      </div>
      <div className="content">
        <Link to="/user">
          <button className="button">Back to User Page</button>
        </Link>
      </div>
      <footer>
      </footer>
    </div>
  );
}

export default ConfirmationPage;
