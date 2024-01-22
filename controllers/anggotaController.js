const express = require('express');
const router = express.Router();
const db = require('../models/db');


router.get('/', (req, res) => {
    db.query('SELECT * FROM tb_anggota',(error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json(result);
        }
    });
});

router.post("/", (req, res) => {
    const { id_anggota, nama_anggota, alamat, sekolah } = req.body;
    db.query(`INSERT INTO tb_anggota (id_anggota, nama_anggota, alamat, sekolah) VALUES (?, ?, ?, ? )`, [id_anggota, nama_anggota, alamat, sekolah], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({id_anggota, nama_anggota, alamat, sekolah});
        }
    })
})

router.get("/nama_anggota",(req,res) => {
    db.query(" select nama_anggota from tb_anggota",(err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/alamat/:alamat",(req,res) => {
    const alamat = req.params.alamat;
    db.query("select * from tb_anggota where alamat = ?", [alamat], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/sekolah/:sekolah",(req,res) => {
    const sekolah = req.params.sekolah;
    db.query("select * from tb_anggota where sekolah = ?", [sekolah], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.get("/id_anggota/:id_anggota",(req,res) => {
    const id_anggota = req.params.id_anggota;
    db.query("select * from tb_anggota where id_anggota = ?", [id_anggota], (err, result) => {
        if (err){
            res.status(500).json({message: 'Internal Server Error'});
        }
        res.json(result);
    })
})

router.delete("/:id_anggota", (req, res) => {
    const id_anggota = req.params.id_anggota;
    db.query(`delete from tb_anggota where id_anggota = ?`, [id_anggota], (error, result) => {
        if (error) {
            console.error('Error fetching perpustakaan9:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json({ message: 'Berhasil'});
        }
    })
})






module.exports = router;

