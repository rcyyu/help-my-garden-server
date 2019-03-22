

const express = require('express');
const app = express();
const path = require('path');
const router = require('./router_modules/router');
const requests = require('./router_modules/requests');
const port = 3000;

app.use(router);


app.listen(port, () => {
    console.log("server-running on port:", port)
})