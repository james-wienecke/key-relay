const express = require("express");
const router = express.Router();
import("node-fetch");

const fetchOMDB = async (query) => {
    const url = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}&t=${query}`;
    try {
        const stream = await fetch(url);
        const json = await stream.json();
        return json;
    } catch (error) {
        return { Error: error.stack };
    }
}

router.get("/", (req, res) => {
    res.json({ success: "Hello from movies" });
});

module.exports = router;