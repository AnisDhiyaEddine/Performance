const mongoose = require("mongoose");

const NodeClientSchema = new mongoose.Schema({
  macAdr: { type: String },
  freeMem: { type: Number },
  usedMem: { type: Number },
  memUseage: { type: Number },
  osType: { type: String },
  upTime: { type: Number },
  cpuModel: { type: String },
  numCores: { type: Number },
  cpuSpeed: { type: Numbre },
  cpuLoad: { type: Numbre },
  isActive: { type: Boolean },
});

module.exports = mongoose.model("NodeClient", NodeClientSchema);

/*  freeMem,
      totalMem,
      usedMem,
      memUseage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad,
      isActive, */
