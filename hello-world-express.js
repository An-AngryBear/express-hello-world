const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
    res.send("hello world!");
})

app.get('/time', (req, res) => {
    let date = new Date();
    let isoTime = date.toISOString();
    res.send(isoTime);

})

let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening to your port (${port})`)
});