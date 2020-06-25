const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/performance", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const NodeClient = require("./models/NodeClient");

const socketMain = (io, socket) => {
  let macAdr;
  socket.on("clientAuth", async (key) => {
    if (key === "nodeClient key") {
      socket.join("nodeClients");
    } else if (key === "uiClient key") {
      socket.join("uiClients");
      let clients = await NodeClient.find();
      client.forEach((client) => {
        client.isActive = false;
        io.to("uiClients").emit("data", client);
      });
    } else {
      //Invalid client
      socket.disconnect(true);
    }
  });

  socket.on("disconnect", async () => {
    client = await NodeClient.find({ macAdr });
    if (client) {
      client.isActive = false;
      console.log(client);
      io.to("uiClients").emit("data", client);
    }
  });
  socket.on("initPerformanceData", async (performance) => {
    macAdr = performance.macAdr;
    let res = await handleMacAdr(performance);
    console.log(res);
  });

  const handleMacAdr = async (performance) => {
    try {
      let res = await NodeClient.findOne({
        macAdr: performance.macAdr,
      });
      if (!res) {
        let client = new NodeClient(performance);
        await client.save();
        return "client added";
      }
      return "client found";
    } catch (error) {
      console.log(error);
    }
  };
  socket.on("performanceData", (performance) => {
    io.to("uiClients").emit("data", performance);
  });
};

module.exports = socketMain;
