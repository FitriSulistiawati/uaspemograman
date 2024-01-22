const express = require('express');
const router = express.Router();
const db = require('../models/db');


router.get('/', (req, res) => {
    db.query('SELECT * FROM tb_buku',(error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json(result);
        }
    });
});

router.post("/", (req, res) => {
    const { id_buku, judul_buku, tahun_terbit, pengarang, penerbit } = req.body;
    db.query(`INSERT INTO tb_buku (id_buku, judul_buku, tahun_terbit, pengarang, penerbit) VALUES (?, ?, ?, ?, ?)`, [id_buku, judul_buku, tahun_terbit, pengarang, penerbit], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({id_buku, judul_buku, tahun_terbit, pengarang, penerbit});
        }
    })
})

router.get("/nama_buku",(req,res) => {
    db.query(" select judul_buku from tb_buku",(err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/pengarang/:pengarang",(req,res) => {
    const pengarang = req.params.pengarang;
    db.query("select * from tb_buku where pengarang = ?", [pengarang], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/penerbit/:penerbit",(req,res) => {
    const penerbit = req.params.penerbit;
    db.query("select * from tb_buku where penerbit = ?", [penerbit], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/tahun_terbit/:tahun_terbit",(req,res) => {
    const tahun_terbit = req.params.tahun_terbit;
    db.query("select * from tb_buku where tahun_terbit = ?", [tahun_terbit], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/id_buku/:id_buku",(req,res) => {
    const id_buku = req.params.id_buku;
    db.query("select * from tb_buku where id_buku = ?", [id_buku], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.delete("/:id_buku", (req, res) => {
    const id_buku = req.params.id_buku;
    db.query(`delete from tb_buku where id_buku = ?`, [id_buku], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({ message: 'Berhasil'});
        }
    })
})






module.exports = router;

