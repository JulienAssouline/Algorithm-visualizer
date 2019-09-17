import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import SortingData from "./SortingData";

function Sorting() {
  const [activeAlgo, setAlgoButton] = useState("Bubble Sort");

  const sortingAlgorithms = ["Bubble Sort", "Insertion Sort"];

  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

  return (
    <div className="sorting-page">
      <h1> Sorting Algorithms </h1>
      <div className="sorting-buttons-container">
        {sortingAlgorithms.map((d, i) => (
          <Button
            key={i}
            onClick={() => setAlgoButton(d)}
            variant="contained"
            color={d === activeAlgo ? "primary" : "default"}
          >
            {d}
          </Button>
        ))}
      </div>
      <SortingData
        data={nums}
        // bubbleSort={bubbleSort}
        activeAlgo={activeAlgo}
      />
    </div>
  );
}

export default Sorting;
