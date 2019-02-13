import React from "react";
import { Doughnut } from "react-chartjs-2";

const DataVis = ({ crime, address, compareCrime }) => {
  const data = {
    labels: [...Object.keys(crime)],

    datasets: [
      {
        data: [...Object.values(crime)],
        backgroundColor: [
          "IndianRed",
          "LightCoral",
          "Salmon",
          "DarkSalmon",
          "LightSalmon",
          "Crimson",
          "LightPink",
          "DeepPink",
          "DarkOrange",
          "Gold",
          "DarkKhaki",
          "BlueViolet",
          "Indigo",
          "SlateBlue"
        ]
      }
    ]
  };
  return (
    <div
      style={{
        width: "50%",
        display: "inline-block",
        "vertical-align": "top"
      }}
    >
      <h1 style={{ padding: "80px" }}>{address}</h1>
      <Doughnut
        data={data}
        options={{
          onClick: (_, element) => {
            compareCrime(element[0]._view.label);
          }
        }}
      />
    </div>
  );
};

export default DataVis;
