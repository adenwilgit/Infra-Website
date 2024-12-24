const express = require('express');
const db = require('../config/Database'); // Koneksi databas
const router = express.Router();

// GET: Ambil semua data penelitian
router.get('/penelitian', (req, res) => {
    const query = 'SELECT * FROM penelitian';
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error fetching data');
        } else {
            res.json(results);
        }
    });
});

// Menambahkan data
router.post('/penelitian', (req, res) => {
    const { judul, lokasi, thn_akademik, tanggal, status } = req.body;
    const query = 'INSERT INTO penelitian (judul, lokasi, thn_akademik, tanggal, status) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [judul, lokasi, thn_akademik, tanggal, status], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
        } else {
            res.send('Data inserted successfully');
        }
    });
});

// Memperbarui data
router.put('/penelitian/:kd_penelitian', (req, res) => {
    const { kd_penelitian } = req.params;
    const { judul, lokasi, thn_akademik, tanggal, status } = req.body;
    const query = 'UPDATE penelitian SET judul = ?, lokasi = ?, thn_akademik = ?, tanggal = ?, status = ? WHERE kd_penelitian = ?';
    db.query(query, [judul, lokasi, thn_akademik, tanggal, status, kd_penelitian], (err, result) => {
        if (err) {
            console.error('Error updating data:', err);
            res.status(500).send('Error updating data');
        } else {
            res.send('Data updated successfully');
        }
    });
});

// Menghapus data
router.delete('/penelitian/:kd_penelitian', (req, res) => {
    const { kd_penelitian } = req.params;
    const query = 'DELETE FROM penelitian WHERE kd_penelitian = ?';
    db.query(query, [kd_penelitian], (err, result) => {
        if (err) {
            console.error('Error deleting data:', err);
            res.status(500).send('Error deleting data');
        } else {
            res.send('Data deleted successfully');
        }
    });
});

module.exports = router;