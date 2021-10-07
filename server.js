const express = require("express");
const server = express();

server.use("/", express.static("marathon-front"));

server.listen(5000, () => {
    console.log('front en el puerto 5000');
});