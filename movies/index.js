const express = require("express");
const router = express.Router();
const fetch = import("node-fetch");

router.get("/", (req, res) => {
    res.json({ success: "Hello from movies" });
});

module.exports = router;