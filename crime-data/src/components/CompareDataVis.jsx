import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const CompareDataVis = ({ compare, crime }) => {
  const data = {
    labels: [...Object.keys(compare)],
    datasets: [
      {
        label: `Who has the worst ${crime}`,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [...Object.values(compare)]
      }
    ]
  };

  return (
    <div>
      <HorizontalBar data={data} />
    </div>
  );
};

export default CompareDataVis;
