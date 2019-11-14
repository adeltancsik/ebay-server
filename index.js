const cors = require("cors");
const express = require("express");
const app = express();
const port = 4000;

// app. ... can also be chained
const middleware = cors();
app.use(middleware);

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const adRouter = require("./ad/router");
app.use(adRouter);

const userRouter = require("./user/router");
app.use(userRouter);

const authRouter = require("./auth/router");
app.use(authRouter);

app.listen(port, () => console.log(`We are listening on port ${port}!!`));
