const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Default user ya XAMPP ni 'root'
  password: '',      // Default password ya XAMPP mara nyingi iko wazi (empty)
  database: 'chuo_db' // Hapa weka jina la database yako uliyotengeneza kwenye PHPMyAdmin
});

db.connect((err) => {
  if (err) {
    console.error('Kuna tatizo la kuunganisha database: ' + err.message);
    return;
  }
  console.log('Database ya MySQL imeunganishwa vizuri!');
});

module.exports = db;