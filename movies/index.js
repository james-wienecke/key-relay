const express = require("express");
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

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

router.get("/:search", async (req, res) => {
    const query = req.params.search;
    const data = await fetchOMDB(query);
    res.json(data);
});

router.post("/", async (req, res) => {
    const query = req.body.search;
    const data = await fetchOMDB(query);
    res.json(data);
});

module.exports = router;