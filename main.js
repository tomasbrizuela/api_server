const express = require('express');
const helment = require('helmet');
const morngan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 8080

const app = express();

app.use(cors())
app.use(helment())
app.use(morngan('dev'))
app.use(express.json())

app.get("/health", (req, res) => {
    try {
        return res.status(200).json({ "Message": "Running healthy" })
    } catch (error) {
        return res.status(400).json({ "Error": "Something went wrong" })
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});