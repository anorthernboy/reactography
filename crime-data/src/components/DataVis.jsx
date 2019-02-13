import React from "react";
import { Doughnut } from "react-chartjs-2";

const DataVis = ({ crime, address }) => {
  console.log(crime);
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
  console.log(data);
  return (
    <div>
      <h1>{address}</h1>
      <Doughnut data={data} />
    </div>
  );
};

export default DataVis;
