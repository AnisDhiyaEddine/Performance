const React = require("react");
const { Component } = React;
const Cpu = require("./Cpu");
const Mem = require("./Mem");
const Info = require("./Info");
class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getinfo() {
    let {
      freeMem,
      totalMem,
      usedMem,
      memUseage,
      osType,
      upTime,
      cpuModel,
      numCores,
      cpuSpeed,
      cpuLoad,
      isActive,
      macAdr
    } = this.props.data;
    let cpu = { cpuLoad };
    let memory = { freeMem, totalMem, usedMem, memUseage };
    let info = {
      upTime,
      isActive,
      osType,
      cpuModel,
      numCores,
      cpuSpeed,
      isActive,
      macAdr
    };

    return { cpu, memory, info };
  }
  render() {
    let notActiveDiv = "";

    let { cpu, memory, info } = this.getinfo();
    if (!info.isActive) {
      notActiveDiv = <div className="not-active">offline</div>;
    }
    cpu.cpuWidgetId = `canvas-cpu-${info.macAdr.toString()}`;
    cpu.cpuWidgetId = cpu.cpuWidgetId.replace(/:/g, "");
    memory.memWidgetId = `canvas-mem-${info.macAdr.toString()}`;
    memory.memWidgetId = memory.memWidgetId.replace(/:/g, "");
    return (
      <div className="widget col-sm-12">
        {notActiveDiv}
        <Cpu cpuData={cpu} />
        <Mem memData={memory} />
        <Info infoData={info} />
      </div> 
    );
  }
}

module.exports = Widget;
