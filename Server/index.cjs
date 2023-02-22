const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO reactmart.customer_login (username, password) VALUES (?,?)",
        [username, password], (err, result) => {
            console.log(err);
        });
});

app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query(
        "SELECT * FROM reactmart.customer_login WHERE username = ? AND password = ?",
        [username, password], (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Please check your username and password!!" });
            }
        });

});


app.get('/products', (req, res) => {
    const sqlGet = "SELECT * FROM reactmart.products";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});

app.get('/customer', (req, res) => {
    const sqlGet = "SELECT * FROM reactmart.customer_login";
    db.query(sqlGet, (err, result) => {
        res.send(result);
    });
});


app.put('/update', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const userid = req.body.userid;

    db.query(
        "UPDATE reactmart.customer_login SET username = ?, password = ? WHERE id = ?",
        [username, password, userid], (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ err: err });
            }
        });

});

app.delete('/delete/:id', (req, res) => {

    const userid = req.params.id;
    
    db.query(
        "DELETE FROM reactmart.customer_login WHERE id = ?", [userid], (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ err: err });
            }
        });

});


app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});