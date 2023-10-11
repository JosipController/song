const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8888;
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.json());
app.use(cors({
  origin: 'https://songfully.org', // Replace with your frontend's URL
}));

const db = new sqlite3.Database('backend/data/mydatabase.db', (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err);
  } else {
    console.log('SQLite database connected.');
    // Create the "users" table if it doesn't exist
    db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      firstName TEXT,
      email TEXT,
    )
  `);
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World! This is your server.');
});

app.post('/api/subscribe', (req, res) => {
  const { firstName, email } = req.body;

  const sql = `
    INSERT INTO users (firstName, email, )
    VALUES (?, ?)
  `;

  db.run(sql, [firstName, email ], (err) => {
    if (err) {
      console.error('Error inserting user data into SQLite:', err);
      res.status(500).json({ message: 'Subscription failed' });
    } else {
      console.log('User data inserted into SQLite.');
      res.status(200).json({ message: 'Subscription successful' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
