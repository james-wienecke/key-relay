require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const app = express();
const port = 3001;
const movies = require('./movies')

app.use(express.json());

const whitelist = ['http://localhost', 'http://127.0.0.1:3000', 'http://127.0.0.1:8080'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Denied"))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const limiter = rateLimit({
    windowMs: 500,
    max: 1,
});
app.use(limiter);

app.use("/movies", movies);

// test route
app.get("/", (req, res) => res.json( { success: "Hello world!" }));
app.listen(port, () => console.log(`App listening on port ${port}...`))