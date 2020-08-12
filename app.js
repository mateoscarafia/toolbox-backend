const express = require('express')
const app = express()

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.set("port", 4000);

app.get("/ping", (req, res) => {
    res.json({ msg: "pong" });
});

app.post('/', (req, res) => {
    if (!req.body.text) {
        return res.sendStatus(400)
    }
    res.send({ text: req.body.text })
})

module.exports = app;

