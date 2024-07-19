var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var app = express();
// Create a connection to the MySQL database
// const connection = mysql.createConnection({
//   host: 'database1.c9a2scyky660.eu-north-1.rds.amazonaws.com', // Your MySQL host (usually 'localhost' for local development)
//   user: 'admin', // Your MySQL username
//   password: 'admin123', // Your MySQL password
//   database: 'database1' // Your MySQL database name
// });


// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });
// connection.query('use database1', (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }
//   console.log('Query results:', results);
// });

// connection.query('SELECT * FROM RDS', (err, results) => {
//   if (err) {
//     console.error('Error executing query:', err);
//     return;
//   }
//   console.log('Query results:', results);
// });

// app.get('/showResults', (req, res) => {
 
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title:"Express" });
});

module.exports = router;
