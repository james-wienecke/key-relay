require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const movies = require('./movies')

app.use(express.json());
app.use(cors());

app.use("/movies", movies);

// test route
app.get("/", (req, res) => res.json( { success: "Hello world!" }));
app.listen(port, () => console.log(`App listening on port ${port}...`))