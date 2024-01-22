const express = require("express");
const app = express();
const port = 8000;
const db = require("./models/db");
const bodyParser = require("body-parser");
const adminAuth = require("./middleware/admin");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const bukuController = require("./controllers/bukuController");
const anggotaController = require("./controllers/anggotaController");
const peminjamController = require("./controllers/peminjamController");

app.use("/api/buku", bukuController);
app.use("/api/anggota", anggotaController);
app.use("/api/peminjam", peminjamController);

app.get("/admin", adminAuth, (req, res) => {
    res.json({ message: "You have access to this protected route", user: req.user });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = { username: "admin", password: "admin" };
    if (username === user.username && password === user.password) {
        const token = jwt.sign(user, "secret-key");
        res.json({ token });
    }
    res.json({ message: "kamu tidak dapat akses" });
});

app.listen(port, () => {
    console.log(`Server started on http:localhost:${port}`);
});