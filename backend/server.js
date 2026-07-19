const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 5000;

// Middleware
app.use(cors()); 
app.use(express.json());

// Route ya kupima server
app.get('/', (req, res) => {
  res.send('Backend testing boom !');
});

// Route ya kusajili User (Imeongezwa logic ya kuzuia duplicate)
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    // Angalia kama email hiyo imeshajisajili
    const checkSql = "SELECT * FROM users WHERE email = ?";
    
    db.query(checkSql, [email], (err, result) => {
        if (err) return res.status(500).json({ message: "Database Error" });

        if (result.length > 0) {
            // User tayari yupo, mzuie!
            return res.status(409).json({ message: "Email hii imeshatumika tayari!" });
        }

        // Kama hayupo, msajili
        const insertSql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        db.query(insertSql, [name, email, password], (err, result) => {
            if (err) {
                console.error("Error imetokea:", err);
                return res.status(500).json({ message: "Imeshindwa kuhifadhi data!" });
            }
            res.status(201).json({ message: "Hongera! Mtumiaji amesajiliwa kikamilifu." });
        });
    });
});

// Route ya Login
app.post('/api/login', (req, res) => {
    const { name, email, password } = req.body;

    const sql = "SELECT * FROM users WHERE name = ? AND email = ? AND password = ?";

    db.query(sql, [name, email, password], (err, result) => {
        if (err) return res.status(500).json({ message: "Server Error" });

        if (result.length > 0) {
            res.status(200).json({ message: "Login imekubali! Karibu ChuoRide" });
        } else {
            res.status(401).json({ message: "Jina, email, au password siyo sahihi!" });
        }
    });
});

app.listen(port, () => {
  console.log(`Backend boom ${port}`);
});