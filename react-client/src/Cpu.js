const React = require("react");
const { default: drawCircle } = require("./utils/canvasLoadAnimation");

function Cpu(props) {
  const canvas = document.querySelector(`.${props.cpuData.cpuWidgetId}`);
  drawCircle(canvas, props.cpuData.cpuLoad);
  return (
    <div className="col-sm-3 cpu">
      <h3>Cpu load</h3>
      <div className="canvas-wrapper">
        <canvas className= {props.cpuData.cpuWidgetId} height="200" width="200">
        </canvas>
        <div className={"cpu-text"}>{props.cpuData.cpuLoad}%</div>
      </div>
    </div>
  );
}

module.exports = Cpu;
