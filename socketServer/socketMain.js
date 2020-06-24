const socketMain = (io, socket) => {
  socket.on("clientAuth", (key) => {
    if (key === "nodeClient key") {
      socket.join("nodeClients");
    } else if (key === "uiClient key") {
      socket.join("uiClients");
    } else {
      //Invalid client
      socket.disconnect(true);
    }
  });
  socket.on("performanceData", (performance) => {
    console.log(performance);
  });
};

module.exports = socketMain;
