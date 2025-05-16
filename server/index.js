const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Cyloda123!",
    database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email],
        (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.length === 0) {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, response) => {
                        if (err) {
                            return res.send(err);
                        }
                        res.send({ msg: "Cadastrado com sucesso" })
                    }
                    );
                })
            } else {
                res.send({ msg: "Usuario ja cadastrado!" })
            }
            res.send(result);
        });
});

app.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if (err) {
            req.send(err);
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (erro, result) => {
                if (result) {
                    res.send({ msg: "Usuario logado com sucesso" })
                } else {
                    res.send({ msg: "Senha está incorreta" });
                }
            })
        } else {
            res.send({ msg: "Conta não encontrada" })
        }

    })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
});


