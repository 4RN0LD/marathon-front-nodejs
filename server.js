const express = require("express");
const server = express();

server.use("/", express.static("marathon-front"));

server.listen(8080, () => {
    console.log('front en el puerto 8080');
});