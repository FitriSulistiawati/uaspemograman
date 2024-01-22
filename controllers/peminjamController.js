const express = require('express');
const router = express.Router();
const db = require('../models/db');


router.get('/', (req, res) => {
    db.query('SELECT * FROM tb_peminjam',(error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json(result);
        }
    });
});

router.post("/", (req, res) => {
    const { id_anggota, id_buku, tgl_peminjam, tgl_kembali } = req.body;
    db.query(`INSERT INTO tb_peminjam (id_anggota, id_buku, tgl_peminjam, tgl_kembali) VALUES (?, ?, ?, ? )`, [id_anggota, id_buku, tgl_peminjam, tgl_kembali], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({id_anggota, id_buku, tgl_peminjam, tgl_kembali});
        }
    })
})

router.get("/id_buku/:id_buku",(req,res) => {
    const id_buku = req.params.id_buku;
    db.query("select * from tb_peminjam where sekolah = ?", [id_buku], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/id_anggota/:id_anggota",(req,res) => {
    const id_anggota = req.params.id_anggota;
    db.query("select * from tb_peminjam where id_anggota = ?", [id_anggota], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.delete("/:id_pinjaman", (req, res) => {
    const id_pinjaman = req.params.id_pinjaman;
    db.query(`delete from tb_peminjam where id_pinjaman = ?`, [id_pinjaman], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({ message: 'Berhasil'});
        }
    })
})






module.exports = router;

