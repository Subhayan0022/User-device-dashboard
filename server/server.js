const express = require("express");
const app = express();
const cors = require("cors")

const PORT = 8080;

app.use(cors());

app.get("/api/home", (req, res) => {
    res.json({
        message:"HELLO WORLD!"
    });
});

app.listen(PORT,() => {
    console.log(`Listening on PORT ${PORT}`);
});