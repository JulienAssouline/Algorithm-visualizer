import React, { useRef, useEffect } from "react";
import { scaleLinear, scaleBand } from "d3-scale";
import { extent, max } from "d3-array";
import { w, h, width, height, margin } from "./utils/chart_utils";
import { selectAll } from "d3-selection";
import { transition } from "d3-transition";
import "./App.css";

function SortingData(props) {
  const { data, activeAlgo } = props;

  let ref = useRef(null);

  const xScale = scaleLinear()
    // .domain(data.map(d => d))
    .domain([0, data.length])
    .range([0, width]);

  const yScale = scaleLinear()
    .domain([0, max(data, d => d)])
    .range([height, 0]);

  useEffect(() => {
    function bubbleSort(nums) {
      do {
        var swapped = false;
        for (let i = 0; i < nums.length; i++) {
          if (nums[i] < nums[i + 1]) {
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            swapped = true;
          }
        }
      } while (swapped);
    }
    const sortedData = bubbleSort(data);

    console.log(sortedData);

    selectAll(ref.current.childNodes)
      .data(data)
      .transition()
      .duration(10000)
      .attr("x", (d, i) => xScale(i - 1));

    selectAll("#labels")
      .data(data)
      .transition()
      .duration(10000)
      .attr("x", (d, i) => xScale(i));
  }, [data, yScale, xScale]);

  const rects = data.map((d, i) => (
    <rect
      id={"rects"}
      key={i}
      x={xScale(i)}
      y={yScale(d)}
      width={width / data.length - 2}
      height={height - yScale(d)}
      style={{ fill: "#ffab00" }}
    />
  ));

  const labels = data.map((d, i) => (
    <text
      id="labels"
      key={i}
      x={xScale(i)}
      y={yScale(d)}
      style={{ color: "black" }}
    >
      {d}
    </text>
  ));

  return (
    <div className="data-page">
      <svg width={w} height={h}>
        <g ref={ref} transform={`translate(${margin.left},${margin.top})`}>
          {rects}
          {labels}
        </g>
      </svg>
    </div>
  );
}

export default SortingData;
