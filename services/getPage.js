const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const response = await fetch("https://ipinfo.io/json", {});
        console.log(response)
        const json = await response.json();
        console.log()
        return res.status(200).json({ "Message": json })
    } catch (error) {
        return res.status(400).json({ "Error": error })
    }
})

router.get("/", async (req, res) => {
    try {
        return res.status(200).json({ "Message": "Made it!" })
    } catch (error) {
        return res.status(400).json({ "Error": error })
    }
})

module.exports = router;