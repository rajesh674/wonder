import React from 'react';
import Plot from "react-plotly.js";

const BarChart = ({barData}) => {
 var data = barData;
var marginv = { r: 10, t: 30, l: 40, b: 20 };
	var tooltip = {
		bgcolor:"#000000bf",
		color:'#fff',
	   fontfamily:'Roboto',
	   fontsize:'14px'
	   
   };
let layout = {
  hoverlabel:(
    tooltip
  ),
  yaxis: {
    type: "log", //log condition
    visible: true,
    autorange: true,
    showticklabels: true,
    title: {
     // text: yaxis,
      font: {
        family: "Roboto, sans-serif",
        size: 14,
        color: "#7f7f7f",
      },
    }
  },
  xaxis: {
    title: {
      //text: xaxis,
      font: {
        family: "Roboto, sans-serif",
        size: 14,
        color: "#7f7f7f",
      },
    }
  },
  showlegend: false,
  legend: {
    orientation: "h",
    xanchor: "center",
    x: 0.5,
    y: -0.3,
  },
  grid: { rows: 1, columns: 1 },
  hovermode: "closest",
  margin: marginv,
};
var config = { //to make chart responsive
  responsive: true,
  displaylogo: false,
  modeBarButtonsToRemove: [
    "hoverCompareCartesian",
    "hoverClosestCartesian",
    "toggleSpikelines",
  ],
};
let style = {
  with:'328px',
  height:'calc(100vh - 380px)'
}
  return <Plot
  data={data}
  style={style}
  layout={layout}
  config={config}
/>
}

export default BarChart;