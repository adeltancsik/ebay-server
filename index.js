const express = require("express");
const app = express();
const port = 4000;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const adRouter = require("./ad/router");
app.use(adRouter);

app.listen(port, () => console.log(`We are listening on port ${port}!!`));
