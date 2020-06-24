const io = require("socket.io-client");
const socket = io("http://localhost:8181");
socket.emit("clientAuth", "uiClient key");

module.exports = socket;
