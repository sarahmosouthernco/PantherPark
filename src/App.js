/*Overall functionality of the webpage, links pages to other pages */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import LoginPage from './Webpages/Loginpage';
import PaymentPage from './Webpages/Paymentpage';
import UserPage from './Webpages/Userpage';
import ConfirmationPage from './Webpages/ConfirmationPage';
import PaymentContext from './PaymentContext';

function App() {
  const [paymentData, setPaymentData] = React.useState({});

  return (
    <PaymentContext.Provider value={{ paymentData, setPaymentData }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </PaymentContext.Provider>
  );
}

export default App;
