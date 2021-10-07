const express = require("express");
const server = express();

server.use("/", express.static("marathon-front"));

server.listen(3000, () => {
    console.log('front en el puerto 3000');
});