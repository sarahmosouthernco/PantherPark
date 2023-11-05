const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3001; // or any port you prefer

// Middleware to parse JSON
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./usecase.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Endpoint to handle user input
app.post('/add-payment', (req, res) => {
  const { cardNumber, cardName, expDate, zipCode } = req.body;
  const sql = `INSERT INTO PaymentTransaction (CardNumber, CardName, ExpDate, ZipCode) VALUES (?, ?, ?, ?)`;

  // Execute SQL statement
  db.run(sql, [cardNumber, cardName, expDate, zipCode], function(err) {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send(`A row has been inserted with rowid ${this.lastID}`);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
  
const cors = require('cors');
app.use(cors());
app.use(express.json());


app.post('/api/add-payment', (req, res) => {
  // Your database insertion logic here
  res.status(200).send('Payment added to the database');
});

