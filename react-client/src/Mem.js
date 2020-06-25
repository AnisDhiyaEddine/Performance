const React = require("react");
const { default: drawCircle } = require("./utils/canvasLoadAnimation");

function Mem(props) {
  let { freeMem, totalMem, memUseage } = props.memData;
  let canvas = document.querySelector(`.${props.memData.memWidgetId}`);
  let totalMemGB = Math.floor((totalMem / 1073741824) * 100) / 100;
  let freeMemGB = Math.floor((freeMem / 1073741824) * 100) / 100;
  drawCircle(canvas, memUseage * 100);
  return (
    <div className="col-sm-3 mem">
      <h3>Memory useage</h3>
      <div className="canvas-wrapper">
        <canvas
          className={props.memData.memWidgetId}
          width="200"
          height="200"
        ></canvas>
        <div className="mem-text">{memUseage * 100}%</div>
      </div>

      <div>Total Memory : {totalMemGB} Gb</div>
      <div>Free Memory : {freeMemGB} Gb</div>
    </div>
  );
}

module.exports = Mem;
