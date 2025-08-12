const express = require('express');
const app = express();
const sum = require('./sum')


const port = 8000;

app.get("/home", async (req, res) => {
    res.json({
        msg: "root"
    });
});

app.get("/getSum/:a/:b", async (req, res) => {
    const { a, b } = req.params;

    res.json({
        ans: sum(parseInt(a), parseInt(b))
    });
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});