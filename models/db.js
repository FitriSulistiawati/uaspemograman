const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'perpustakaan9',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to Mysql database:', err);
    }   else {
        console.log('Connected to Mysql database');
    }
});

module.exports = connection;