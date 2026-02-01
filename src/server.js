const express = require("express");
const app = express()

app.get("/", (req, res) => {
res.send("<H2>hi</H2>");
});

const PORT = process.env.PORT ||3000;
app.listen(PORT, () =>  {
    console.log('Server listening on port ${PORT}');
});
