import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useLocation } from "react-router-dom";
import "./Graph.css";

export default function Heatmap() {
  const [color,setColor] = useState("#FCBB00");
  const handleChange = (e) =>{
    setColor(e.target.value);
  }
  const location = useLocation();
  const data = location.state.data;
  const heatmapX = location.state.heatmapX;
  const heatmapY = location.state.heatmapY;
  function generateData(value) {
    var series = [];
    for (var i = 0; i < heatmapX.length; i++) {
      var x = heatmapX[i]['label'];
      var y = value[i];
      series.push({
        x: x,
        y: y,
      });
    }
    return series;
  }

  const state = {
    series: [],
    options: {
      chart: {
        height: 350,
        type: "heatmap",
      },
      dataLabels: {
        enabled: false,
      },
      colors: [color],
      title: {
        text: "HeatMap Chart",
      },
    },
  };
  for (let index = 1; index < data.length; index++) {
    var val=[];
    for (let index1 = 0; index1 < heatmapX.length; index1++) {
      if(data[index][heatmapX[index1]['value']]===""){
        data[index][heatmapX[index1]['value']]=0;
      }
      val.push(data[index][heatmapX[index1]['value']]); 
    }
    var count=0;
    for (let index2 = 0; index2 < val.length; index2++) {
      const element = val[index2];
      if(element===0){
        count++;
      }
    }
    if(count!==val.length){
      state.series.push({
        name : data[index][heatmapY['value']],
        data : generateData(val)
      })
    }
  }
  return (
    <div className="graphs-outer-div">
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh"
      }}
    >
      <div id="chart" style={{ width: "70%", height: "max-content",marginBottom:"100px" }}>
        <input type="color" id="color3" value={color} list="colors" className="heatmap-color-input" onChange={handleChange}/>
        <datalist id="colors">
          <option>#FCBB00</option>
          <option>#cc0000</option>
          <option>#4361ee</option>
          <option>#fb6f92</option>
        </datalist>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="heatmap"
          height={800}
        />
      </div>
      <div id="html-dist"></div>
    </div>
    </div>
  );
}
